import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { ChevronLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

interface Todo {
  id: number;
  name: string;
}

export default function SupabaseTest() {
  const [todos, setTodos] = useState<Todo[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from('todos').select();
        if (error) throw error;
        setTodos(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-20 font-sans">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-12 uppercase text-xs font-black tracking-[0.3em]"
      >
        <ChevronLeft size={16} /> Back to Home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 leading-none">
          Supabase <span className="text-neutral-500">Connection</span>
        </h1>
        <p className="text-neutral-500 font-bold uppercase tracking-widest text-xs mb-12">
          Verifying real-time data integration
        </p>

        {loading ? (
          <div className="flex items-center gap-4 p-8 rounded-[2rem] bg-neutral-900/20 border border-white/5">
            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            <p className="text-neutral-500 uppercase text-xs font-black tracking-widest">Fetching from backend...</p>
          </div>
        ) : error ? (
          <div className="p-8 rounded-[2rem] bg-red-500/10 border border-red-500/20 flex items-start gap-4">
            <AlertCircle className="text-red-500 shrink-0" size={24} />
            <div>
              <p className="text-red-500 font-black uppercase text-xs tracking-widest mb-2">Connection Failed</p>
              <p className="text-neutral-400 text-sm">{error}</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-500 mb-8">
              <CheckCircle2 size={20} />
              <p className="font-black uppercase text-[10px] tracking-[0.2em]">Connection Active: 200 OK</p>
            </div>

            <div className="grid gap-4">
              {todos && todos.length > 0 ? (
                todos.map((todo) => (
                  <motion.div
                    key={todo.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-6 rounded-[1.5rem] bg-neutral-900/40 border border-white/5 flex items-center justify-between group hover:border-white/20 transition-all"
                  >
                    <span className="font-bold text-neutral-300 uppercase tracking-wide">{todo.name}</span>
                    <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">ID: {todo.id}</span>
                  </motion.div>
                ))
              ) : (
                <div className="p-12 text-center rounded-[2rem] border border-dashed border-white/10">
                  <p className="text-neutral-600 uppercase text-xs font-black tracking-widest">No records found in 'todos' table</p>
                </div>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
