import React, {useState} from 'react';
import "../ComponentStyles/Sidebar.css"
import SideBar from '../Dashboard/SideBar.tsx'
import { Link } from 'react-router-dom';
function Report()
{
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-2xl space-y-4 px-4">
          {/* Title Text Box */}
          <Textarea
            placeholder="Title"
            className="h-10 border-gray-300 rounded-md shadow-sm"
          />
  
          {/* Introduction Text Box */}
          <Textarea
            placeholder="Introduction"
            className="h-24 border-gray-300 rounded-md shadow-sm"
          />
  
          {/* Body Text Box */}
          <Textarea
            placeholder="Main Body"
            className="h-64 border-gray-300 rounded-md shadow-sm"
          />
        </div>
      </div>
    )
}

export default Report;