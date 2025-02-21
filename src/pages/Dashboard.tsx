import React, { useEffect, useState } from 'react'
import { BarChart3, BookOpen, Settings, LogOut, User, Upload } from 'lucide-react'
import { UserAuth } from '@/context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const { session, signOut } = UserAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (session?.user?.user_metadata?.username) {
      setUsername(session.user.user_metadata.username);
    }
  }, [session]);

  const handleSignOut = async () => {
    try {
      const { success } = await signOut();
      if (success) {
        navigate('/');
      }
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4 border-b">
          <div className="flex items-center">
            <span className="text-yellow-500 text-2xl font-bold">F</span>
            <span className="text-red-500 text-2xl font-bold">2</span>
            <span className="text-green-500 text-xl ml-2 font-semibold">MathX</span>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            Welcome, {username || 'User'}
          </div>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-green-50 rounded-lg group">
                <BarChart3 className="w-5 h-5 mr-3 text-gray-500 group-hover:text-green-500" />
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-green-50 rounded-lg group">
                <Upload className="w-5 h-5 mr-3 text-gray-500 group-hover:text-green-500" />
                Upload Question
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-green-50 rounded-lg group">
                <BookOpen className="w-5 h-5 mr-3 text-gray-500 group-hover:text-green-500" />
                My Solutions
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-green-50 rounded-lg group">
                <User className="w-5 h-5 mr-3 text-gray-500 group-hover:text-green-500" />
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-green-50 rounded-lg group">
                <Settings className="w-5 h-5 mr-3 text-gray-500 group-hover:text-green-500" />
                Settings
              </a>
            </li>
            <li>
              <button 
                onClick={handleSignOut}
                className="w-full flex items-center p-2 text-red-600 hover:bg-red-50 rounded-lg group cursor-pointer"
              >
                <LogOut className="w-5 h-5 mr-3" />
                Sign Out
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="px-6 py-4">
            <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-600">Total Questions</h3>
                <span className="text-green-500 bg-green-100 p-2 rounded-full">
                  <BarChart3 className="w-5 h-5" />
                </span>
              </div>
              <p className="text-3xl font-semibold mt-4">24</p>
              <p className="text-green-500 text-sm mt-2">+12% from last month</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-600">Solved Questions</h3>
                <span className="text-green-500 bg-green-100 p-2 rounded-full">
                  <BookOpen className="w-5 h-5" />
                </span>
              </div>
              <p className="text-3xl font-semibold mt-4">18</p>
              <p className="text-green-500 text-sm mt-2">+8% from last month</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-600">Success Rate</h3>
                <span className="text-green-500 bg-green-100 p-2 rounded-full">
                  <BarChart3 className="w-5 h-5" />
                </span>
              </div>
              <p className="text-3xl font-semibold mt-4">75%</p>
              <p className="text-green-500 text-sm mt-2">+5% from last month</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Recent Activity</h2>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-green-500" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-semibold">Question #{item} Solved</p>
                      <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard