'use client'

import React, { useState } from 'react';
import Image from 'next/image';

import { Button } from '../../../components/ui/button';
import {  SearchIcon } from 'lucide-react';
import Link from 'next/link';

import Frame from '@/app/tasks/sections/Frame/Frame';

interface FormData {
  name: string;
  symbol: string;
  description: string;
  image: File | null;
  imagePreview: string;
  twitter: string;
  discord: string;
}

export default function CreateFunOrg() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    symbol: '',
    description: '',
    image: null,
    imagePreview: '/toklogo.svg',
    twitter: '',
    discord: ''
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          image: file,
          imagePreview: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-black w-full min-h-screen relative">
  <Frame className="hidden lg:block" />

      {/* Mobile Header */}
      <div className="lg:hidden flex justify-between p-4 bg-[#171717] sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img src="/gslogo.svg" alt="Gigsol Logo" className="w-8 h-8" />
          <h1 className="text-white text-xl font-semibold">GIGSOL</h1>
        </div>
        <div className="flex items-center gap-4">
          <img src="/wallet.svg" alt="Wallet Icon" className="" />
          <p className="text-white">CYZSsd....</p>
          <button onClick={toggleMenu} className="text-white">
            <img src="/burg.svg" alt="Menu Icon" className="" />
          </button>
        </div>
      </div>

      {/* Slide-Out Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed top-0 right-0 w-3/4 h-full bg-[#171717] z-50 px-8 p-5 flex flex-col">
          <div className="flex items-center absolute gap-2 right-8 mt-4">
            <div className="flex items-center gap-2 text-white">
              <img src="/wallet.svg" alt="Wallet Icon" className="w-6 h-6" />
              <p className="text-sm">CYZSsd....</p>
            </div>
            <button onClick={toggleMenu} className="text-white text-2xl">
              ✖
            </button>
          </div>

          <nav className="space-y-12 mt-[40%]">
            <Link
              href="/tasks"
              className="flex items-center gap-2 text-white text-base font-medium hover:text-gray-400"
            >
              <img src="/globe.svg" className="w-5 h-5" />
              Fun Org
            </Link>
            <Link
              href="/leaderboard"
              className="flex items-center gap-2 text-white text-base font-medium hover:text-gray-400"
            >
              <img src="/advanced.svg" className="w-5 h-5" />
              Advanced
            </Link>
            <Link
              href="/leaderboard"
              className="flex items-center gap-2 text-white text-base font-medium hover:text-gray-400"
            >
              <img src="/dice.svg" className="w-5 h-5" />
              Fun jobs
            </Link>
          </nav>

          <div className="flex absolute bottom-[5%] items-center gap-2">
            <img src="/gslogo.svg" alt="Gigsol Logo" className="w-8 h-8" />
            <h1 className="text-white text-xl font-semibold">GIGSOL</h1>
          </div>
        </div>
      )}

      {/* Main content area */}
      <div className="absolute left-0 lg:left-[373px] top-[10px] bottom-0 overflow-y-auto hide-scrollbar right-0 lg:right-[53px] px-4 lg:px-0">
        {/* Top navigation buttons */}
        <div className="absolute top-8 right-8 hidden lg:flex items-center gap-2">
          <Button
            variant="ghost"
            className="flex items-center gap-1 h-auto py-[7px] px-[7px] bg-[#ffffff1a] rounded-[40px] text-white"
          >
            <SearchIcon className="w-[18px] h-[18px]" />
            <span className="font-medium text-sm">Search</span>
          </Button>

          <Button
            variant="ghost"
            className="flex items-center gap-1 h-auto py-[7px] px-[7px] bg-[#ffffff1a] rounded-[40px] text-white"
          >
            <div className="w-[18px] h-[18px] relative">
              <img
                className="absolute w-[15px] h-[15px] top-0.5 left-0.5"
                alt="Token icon"
                src="https://c.animaapp.com/mamw74gcIAFRo9/img/group.png"
              />
            </div>
            <span className="font-medium text-sm">Token</span>
          </Button>

          <Button className="flex items-center gap-1 h-auto py-[7px] px-[7px] bg-[#30EAF7] rounded-[40px] text-black-1">
            <div className="w-[18px] h-[18px] relative">
              <img
                className="absolute w-[15px] h-[15px] top-0.5 left-0.5"
                alt="Create icon"
                src="https://c.animaapp.com/mamw74gcIAFRo9/img/group-2.png"
              />
            </div>
            <span className="font-medium text-sm">Create</span>
          </Button>

          <Button
            variant="outline"
            className="flex items-center h-auto py-[7px] px-[7px] bg-[#ffffff1a] rounded-[40px] text-white border-[#494949]"
          >
            <span className="font-medium text-sm">Connect Wallet</span>
          </Button>
        </div>

        {/* Form content */}
        <div className="flex mt-20 lg:mt-24">
          {/* Left side - Form */}
          <div className="flex-1 max-w-[600px]">
            <h1 className="text-[32px] font-semibold text-[#30EAF7] mb-8">Create fun Orgs</h1>
            
            <div className="space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="block text-white text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Input name of organization"
                  className="w-full bg-[#1A1A1A] border border-[#494949] rounded-[10px] p-3 text-white placeholder-[#7F7F7F] focus:outline-none focus:border-[#30EAF7]"
                />
              </div>

              {/* Symbol Input */}
              <div className="space-y-2">
                <label className="block text-white text-sm font-medium">Symbol</label>
                <input
                  type="text"
                  name="symbol"
                  value={formData.symbol}
                  onChange={handleInputChange}
                  placeholder="e.g. MOON"
                  className="w-full bg-[#1A1A1A] border border-[#494949] rounded-[10px] p-3 text-white placeholder-[#7F7F7F] focus:outline-none focus:border-[#30EAF7]"
                />
              </div>

              {/* Description Input */}
              <div className="space-y-2">
                <label className="block text-white text-sm font-medium">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your organization"
                  className="w-full bg-[#1A1A1A] border border-[#494949] rounded-[10px] p-3 text-white placeholder-[#7F7F7F] focus:outline-none focus:border-[#30EAF7] min-h-[120px] resize-none"
                  maxLength={500}
                />
                <div className="text-right text-[#7F7F7F] text-xs">Max 500 characters</div>
              </div>

              {/* Upload Image */}
              <div className="space-y-2">
                <label className="block text-white text-sm font-medium">Upload image</label>
                <div 
                  className="border-2 border-dashed border-[#494949] rounded-[10px] p-8 text-center cursor-pointer hover:border-[#30EAF7] transition-colors"
                  onClick={() => document.getElementById('imageUpload')?.click()}
                >
                  <div className="flex flex-col items-center gap-2">
                    <img src="/upload-cloud.svg" alt="Upload" className="w-8 h-8" />
                    <span className="text-[#7F7F7F]">Click to add image</span>
                    <span className="text-xs text-[#7F7F7F]">PNG, JPG, GIF up to 5MB</span>
                  </div>
                  <input
                    id="imageUpload"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </div>
              </div>

              {/* Socials Section */}
              <div className="space-y-4">
                <h3 className="text-white text-sm font-medium">Socials (Optional)</h3>
                
                {/* X/Twitter Input */}
                <div className="space-y-2">
                  <label className="block text-white text-sm">X</label>
                  <input
                    type="text"
                    name="twitter"
                    value={formData.twitter}
                    onChange={handleInputChange}
                    placeholder="twitter.com/"
                    className="w-full bg-[#1A1A1A] border border-[#494949] rounded-[10px] p-3 text-white placeholder-[#7F7F7F] focus:outline-none focus:border-[#30EAF7]"
                  />
                </div>

                {/* Discord Input */}
                <div className="space-y-2">
                  <label className="block text-white text-sm">Discord</label>
                  <input
                    type="text"
                    name="discord"
                    value={formData.discord}
                    onChange={handleInputChange}
                    placeholder="https://discord.com/"
                    className="w-full bg-[#1A1A1A] border border-[#494949] rounded-[10px] p-3 text-white placeholder-[#7F7F7F] focus:outline-none focus:border-[#30EAF7]"
                  />
                </div>
              </div>

              {/* Warning Message */}
              <div className="flex items-center gap-2 bg-[#FFB80026] rounded-[10px] p-4">
                <img src="/warning.svg" alt="Warning" className="w-5 h-5" />
                <span className="text-[#FFB800] text-sm">Token data cannot be changed after creation.</span>
              </div>

              {/* Launch Button */}
              <button className="w-full bg-[#30EAF7] text-black font-medium py-4 rounded-[10px] hover:bg-[#30EAF7]/90 transition-colors">
                Launch token
              </button>
            </div>
          </div>

          {/* Right side - Preview Card */}
          <div className="flex-1 ml-8 hidden lg:block">
            <h2 className="text-white text-lg font-medium mb-4">Org Preview card</h2>
            <div className="bg-[#171717] rounded-[20px] p-6 max-w-[400px]">
              {/* Image Container */}
              <div className="rounded-[10px] overflow-hidden mb-4">
                <img 
                  src='/toklogo.svg'
                  alt="Preview" 
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="space-y-3">
                <h3 className="text-white text-lg font-semibold">
                  {formData.name || 'Mojosworld'} ({formData.symbol ? `$${formData.symbol}` : '$mjwd'})
                </h3>
                
                {/* Market Cap and Volume */}
                <div className="flex items-center gap-4">
                  <div className="text-white text-sm">MC: $33.5k</div>
                  <div className="text-white text-sm">Vol: $223.9k</div>
                </div>

                {/* Percentage Change */}
                <div className="text-[#00FF85] text-sm">+13.77%</div>

                {/* Views and Time */}
                <div className="flex items-center gap-4 text-[#7F7F7F] text-sm">
                  <div className="flex items-center gap-1">
                    <img src="/views.svg" alt="Views" className="w-4 h-4" />
                    <span>54</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src="/time.svg" alt="Time" className="w-4 h-4" />
                    <span>20 min ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 