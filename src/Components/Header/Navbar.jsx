import React from 'react';
import {Link} from 'react-router-dom';

import { AiOutlineCaretDown } from 'react-icons/ai';

export const Navbar = () => {
  return (
    <>
      <ul className='flex justify-between items-center w-7/12'>
        <li>
          Health Topics 
          <AiOutlineCaretDown/>
          <HealthTopics />
        </li>
        <li>
          Plan 
          <AiOutlineCaretDown/>
          <Plan/>
        </li>
        <li>
          Healthy Recipes 
          <AiOutlineCaretDown/>
          <HealthTopics/>
        </li>
        <li>
          Video & Tools 
          <AiOutlineCaretDown/>
          <VideoTools/>
        </li>
      </ul>
    </>
  )
}


const features = [
  {list: 'Breast Cancer', path: '/breast cancer'},
  {list: 'IBD', path: '/IBD'},
  {list: 'Migraine',path: '/Migraine'},
  {list: 'Multiple Sclerosis (MS)',path: '/Multiple Sclerosis'},
  {list: 'Rheumatoid Arthritis',path: '/Rheumatoid Arthritis'},
  {list: 'Type 2 Diabetes',path: '/Type 2 Diabetes'},
]

export function HealthTopics(){
  return(
    <div className='nav-content' id="Health-content">
      <div className="wrap">
        <div className='w-3/12'>
          <h2 className='text-xl font-bold text-black py-3'>Featured</h2>
          <ul>
            {features.map((items, index) => (
                <li key={index}><Link to={items.path}>{items.list}</Link></li>
            ))}
          </ul>
        </div>                       
      </div>
    </div>
  )
}

const healthyChallenges =[
    {list: 'Mindful Eating', path: '/Mindful Eating'},
    {list: 'Sugar Savvy', path: '/Sugar Savvy'},
    {list: 'Move Your Body', path: '/Move Your Body'},
    {list: 'Gut Health', path: '/Gut Health'},
    {list: 'Mood Foods', path: '/Mood Foods'}
  ]
 const findCare = [
    {list: 'Primary Care', path: '/Primary Care'},
    {list: 'Mental Health', path: '/Mental Health'},
    {list: 'Dermatologists', path: '/Dermatologists'},
    {list: 'OB-GYN', path: '/OB-GYN'},
    {list: 'Neurologists', path: '/Neurologists'},
    {list: 'Cardiologists', path: '/Cardiologists'},
    {list: 'Orthopedists', path: '/Orthopedists'}
  ]


export function Plan() {
  return (
    <div className="nav-content hide-content" id="Health-topics">
      <div className="wrap flex  gap-24">
        <div className='w-3/12'>
            <h2  className='text-xl font-bold text-black py-3'>Health Challenges</h2>
            <ul>
              {healthyChallenges.map((items, index) => (
                  <li key={index}><Link to={items.path}>{items.list}</Link></li>
              ))}
            </ul>
        </div>

        <div className='w-3/12'>
            <h2 className='text-xl font-bold text-black py-3'>Find Care</h2>
            <ul>
              {findCare.map((items, index) => (
                  <li key={index}><Link to={items.path}>{items.list}</Link></li>
              ))}
            </ul>
        </div>
      </div>
    </div>   
  )
}

const healthyRecipes = [
  {list: 'Dinner' , path: '/Dinner'},
  {list: 'Breakfast' , path: '/Breakfast'},
  {list: 'Launch' , path: '/Launch'},
  {list: 'Desserts' , path: '/Desserts'}
]

export function HealthyRecipes(){
  return (
    <div className="nav-content hide-content" id="Health-topics">
      <div className="wrap">
        <div className='w-3/12'>
          <h2 className='text-xl font-bold text-black py-3'>Health Foods</h2>
          <ul>
            {healthyRecipes.map((items, index) => (
                <li key={index}><Link to={items.path}>{items.list}</Link></li>
            ))}
            </ul>
        </div>
      </div>
    </div>    
  )
}


const videoTools = [
  {list: 'Allergies', path: '/Allergies'},
  {list: 'Alzheimer disease', path: '/Alzheimer disease'},
  {list: 'Arrhythmias', path: '/Arrhythmias'},
  {list: 'Atherosclerosis', path: '/Atherosclerosis'}
]

export function VideoTools(){
  return (
    <div className="nav-content" id="Health-content">
      <div className="wrap">
          <div className='w-3/12'>
              <h2 className='text-xl font-bold text-black py-3'>Health Videos</h2>
              <ul>
                {videoTools.map((items, index) => (
                    <li key={index}><Link to={items.path}>{items.list}</Link></li>
                ))}
              </ul>
          </div>
      </div>
    </div>
  )
}

