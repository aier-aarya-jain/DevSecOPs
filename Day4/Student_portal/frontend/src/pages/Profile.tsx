import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { User as UserIcon, Mail, Book, Settings, Camera, Save, Shield } from 'lucide-react';

export const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold">Profile Management</h1>
        <p className="text-muted-foreground mt-1">Manage your account settings and preferences.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-1"
        >
          <div className="glass-card p-6 flex flex-col items-center text-center">
            <div className="relative mb-4 group cursor-pointer">
              <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <UserIcon className="h-16 w-16 text-muted-foreground" />
                </div>
              </div>
              <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-xl font-bold">{user?.name || 'Student Name'}</h2>
            <p className="text-sm text-primary mb-4">{user?.role || 'Undergraduate Student'}</p>
            
            <div className="w-full space-y-2 mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Student ID</span>
                <span className="font-mono">STU-84920</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Joined</span>
                <span>Sep 2023</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-2 space-y-6"
        >
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold flex items-center">
                <Settings className="mr-2 h-5 w-5 text-primary" />
                Personal Information
              </h3>
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="text-sm text-primary hover:underline px-3 py-1 rounded-full bg-primary/10"
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <input
                      type="text"
                      defaultValue={user?.name || ''}
                      disabled={!isEditing}
                      className="w-full pl-10 pr-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <input
                      type="email"
                      defaultValue={user?.email || ''}
                      disabled={!isEditing}
                      className="w-full pl-10 pr-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-medium">Major / Department</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Book className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <input
                      type="text"
                      defaultValue="Computer Science"
                      disabled={!isEditing}
                      className="w-full pl-10 pr-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>

              {isEditing && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="flex justify-end pt-4"
                >
                  <button className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </button>
                </motion.div>
              )}
            </form>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-bold flex items-center mb-4">
              <Shield className="mr-2 h-5 w-5 text-emerald-500" />
              Security Settings
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                <div>
                  <h4 className="font-medium">Password</h4>
                  <p className="text-sm text-muted-foreground mt-1">Last changed 3 months ago</p>
                </div>
                <button className="px-4 py-2 text-sm bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                  Update
                </button>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                <div>
                  <h4 className="font-medium">Two-Factor Authentication</h4>
                  <p className="text-sm text-muted-foreground mt-1">Add an extra layer of security</p>
                </div>
                <button className="px-4 py-2 text-sm bg-primary/20 text-primary hover:bg-primary/30 rounded-lg transition-colors">
                  Enable
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
