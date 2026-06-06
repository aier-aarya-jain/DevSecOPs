import React from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Award, Calendar, Bell, ChevronRight } from 'lucide-react';

const stats = [
  { label: 'Enrolled Courses', value: '4', icon: BookOpen, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { label: 'Upcoming Assignments', value: '3', icon: Clock, color: 'text-orange-500', bg: 'bg-orange-500/10' },
  { label: 'Average Grade', value: 'A-', icon: Award, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { label: 'Attendance', value: '98%', icon: Calendar, color: 'text-purple-500', bg: 'bg-purple-500/10' },
];

const recentActivities = [
  { id: 1, title: 'Submitted Assignment', course: 'Advanced Mathematics', time: '2 hours ago' },
  { id: 2, title: 'Grade Updated', course: 'Computer Science 101', time: '5 hours ago' },
  { id: 3, title: 'New Course Material', course: 'Physics II', time: '1 day ago' },
];

export const Dashboard = () => {
  const { user } = useAuth();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-8"
      >
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {user?.name || 'Student'}! 👋</h1>
          <p className="text-muted-foreground mt-1">Here's what's happening with your studies today.</p>
        </div>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="p-2 glass rounded-full relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
        </motion.button>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        {stats.map((stat, index) => (
          <motion.div key={index} variants={item} className="glass-card p-6 flex items-center space-x-4 hover:border-primary/50 transition-colors cursor-pointer group">
            <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
              <stat.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 glass-card p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Current Courses</h2>
            <button className="text-primary text-sm hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((course) => (
              <div key={course} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all flex items-center justify-between group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Course Name {course}</h4>
                    <p className="text-sm text-muted-foreground">Prof. Smith • Next class in 2h</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right hidden sm:block">
                    <div className="text-sm font-medium">Progress</div>
                    <div className="w-24 h-2 bg-white/10 rounded-full mt-1">
                      <div className="w-3/4 h-full bg-primary rounded-full"></div>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-6"
        >
          <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
          <div className="space-y-6">
            {recentActivities.map((activity, index) => (
              <div key={activity.id} className="flex items-start space-x-4 relative">
                {index !== recentActivities.length - 1 && (
                  <div className="absolute left-[11px] top-6 bottom-[-24px] w-[2px] bg-white/10" />
                )}
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center z-10 shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">{activity.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{activity.course}</p>
                  <p className="text-xs text-primary mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
