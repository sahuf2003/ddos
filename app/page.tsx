'use client' 
import { useState } from 'react'
import { Bell, Shield, Activity, Map, Clock, Download } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: '00:00', value: 4000 },
  { name: '04:00', value: 3000 },
  { name: '08:00', value: 5000 },
  { name: '12:00', value: 2780 },
  { name: '16:00', value: 1890 },
  { name: '20:00', value: 2390 },
  { name: '23:59', value: 3490 },
]

export default function DDoSProtectionDashboard() {
  const [showNotification, setShowNotification] = useState(true)

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-green-400">DDoS Protection Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
            <Download className="mr-2" size={18} />
            Download Report
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full">
            <Bell size={18} />
          </button>
        </div>
      </header>

      {showNotification && (
        <div className="bg-yellow-900 border-l-4 border-yellow-400 p-4 mb-8 flex justify-between items-center">
          <div className="flex items-center">
            <Shield className="text-yellow-400 mr-3" size={24} />
            <span>DDoS attempt detected and mitigated. Click for details.</span>
          </div>
          <button onClick={() => setShowNotification(false)} className="text-gray-300 hover:text-white">
            &times;
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Activity className="mr-2 text-green-400" size={24} />
            Current Status
          </h2>
          <div className="text-4xl font-bold text-green-400">Protected</div>
          <p className="text-gray-400 mt-2">Last attack: 2 hours ago</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Map className="mr-2 text-blue-400" size={24} />
            Traffic by Region
          </h2>
          <div className="text-4xl font-bold">142 countries</div>
          <p className="text-gray-400 mt-2">Top: United States (27%)</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Clock className="mr-2 text-purple-400" size={24} />
            Uptime
          </h2>
          <div className="text-4xl font-bold">99.99%</div>
          <p className="text-gray-400 mt-2">Last 30 days</p>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Traffic Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
              itemStyle={{ color: '#E5E7EB' }}
            />
            <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Recent Events</h2>
          <ul className="space-y-4">
            {[1, 2, 3].map((item) => (
              <li key={item} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Suspicious traffic detected</p>
                  <p className="text-sm text-gray-400">2 minutes ago</p>
                </div>
                <button className="text-blue-400 hover:text-blue-300">View</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Protection Settings</h2>
          <ul className="space-y-4">
            {['Web Application Firewall', 'Rate Limiting', 'IP Reputation Filtering'].map((item) => (
              <li key={item} className="flex items-center justify-between">
                <span>{item}</span>
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                  <input type="checkbox" name="toggle" id={item} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                  <label htmlFor={item} className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
