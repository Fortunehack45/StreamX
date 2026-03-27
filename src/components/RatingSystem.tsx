import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { db, auth } from '../firebase';
import { collection, addDoc, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';

interface RatingSystemProps {
  contentId: string;
  contentType: 'movie' | 'series' | 'podcast';
}

export const RatingSystem: React.FC<RatingSystemProps> = ({ contentId, contentType }) => {
  const [rating, setRating] = useState<number>(0);
  const [userRatingId, setUserRatingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRating = async () => {
      if (!auth.currentUser) {
        setLoading(false);
        return;
      }
      const q = query(collection(db, 'ratings'), where('contentId', '==', contentId), where('userId', '==', auth.currentUser.uid));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        setRating(doc.data().rating);
        setUserRatingId(doc.id);
      }
      setLoading(false);
    };
    fetchRating();
  }, [contentId]);

  const handleRate = async (newRating: number) => {
    if (!auth.currentUser) return alert('Please sign in to rate.');
    setRating(newRating);
    try {
      if (userRatingId) {
        await updateDoc(doc(db, 'ratings', userRatingId), { rating: newRating });
      } else {
        const docRef = await addDoc(collection(db, 'ratings'), {
          contentId,
          contentType,
          userId: auth.currentUser.uid,
          rating: newRating,
          createdAt: new Date().toISOString()
        });
        setUserRatingId(docRef.id);
      }
    } catch (error) {
      console.error('Error saving rating:', error);
      alert('Failed to save rating.');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`cursor-pointer ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
          onClick={() => handleRate(star)}
        />
      ))}
    </div>
  );
};
