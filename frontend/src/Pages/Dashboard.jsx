import React, { useState } from 'react';
import { User, Mail, Calendar, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import AnimatedSection from '../components/animations/AnimatedSection';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');

  const handleLogout = () => {
    logout();
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back, {user?.name}!
            </h1>
            <p className="text-gray-600 mt-2">
              Manage your account and preferences
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <AnimatedSection delay={0.2}>
            <Card className="p-6">
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <User size={32} className="text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{user?.name}</h3>
                <p className="text-gray-600">{user?.email}</p>
              </div>
              
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-indigo-50 text-indigo-600 border border-indigo-200'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon size={20} />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
              
              <div className="mt-6 pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <LogOut size={20} />
                  Logout
                </Button>
              </div>
            </Card>
          </AnimatedSection>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <AnimatedSection delay={0.4}>
              {activeTab === 'profile' && (
                <Card className="p-8">
                  <h2 className="text-2xl font-semibold mb-6">Profile Information</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                          </label>
                          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <User size={20} className="text-gray-500" />
                            <span className="text-gray-900">{user?.name}</span>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <Mail size={20} className="text-gray-500" />
                            <span className="text-gray-900">{user?.email}</span>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Member Since
                          </label>
                          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <Calendar size={20} className="text-gray-500" />
                            <span className="text-gray-900">
                              {new Date(user?.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-4">
                            Account Stats
                          </h3>
                          <div className="grid grid-cols-1 gap-4">
                            <div className="bg-indigo-50 p-4 rounded-lg">
                              <div className="text-2xl font-bold text-indigo-600">1</div>
                              <div className="text-sm text-indigo-600">Active Sessions</div>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg">
                              <div className="text-2xl font-bold text-green-600">
                                {Math.floor((Date.now() - new Date(user?.createdAt)) / (1000 * 60 * 60 * 24))}
                              </div>
                              <div className="text-sm text-green-600">Days Active</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              )}

              {activeTab === 'settings' && (
                <Card className="p-8">
                  <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Preferences</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-medium text-gray-900">Email Notifications</h4>
                            <p className="text-sm text-gray-600">Receive updates about your account</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-medium text-gray-900">SMS Notifications</h4>
                            <p className="text-sm text-gray-600">Receive text messages for important updates</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Security</h3>
                      <div className="space-y-4">
                        <Button variant="outline" className="w-full">
                          Change Password
                        </Button>
                        <Button variant="outline" className="w-full">
                          Enable Two-Factor Authentication
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              )}
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;