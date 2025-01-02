import Link from 'next/link'
import Image from 'next/image'
import { BsArrowUpRight } from 'react-icons/bs'

import {BlogAnchor, SocialAnchor} from '@/components/anchor'
import TwitterPhoto from '@/public/assets/twitter.jpg'
import LinkedinPhoto from '@/public/assets/linkedin.jpeg'
import GithubPhoto from '@/public/assets/github.jpg'
import EmailPhoto from '@/public/assets/email.jpg'

import WebcentralTeam from '@/public/assets/WebCentral-Team.jpg'
import Self1 from '@/public/assets/Self-1.jpeg'
import Self2 from '@/public/assets/Self-2.jpg'
import Self3 from '@/public/assets/Self-3.jpg'

export default function Home() {
  return (
    <main className='w-full h-full flex flex-col gap-10 px-4 md:px-0 text-lg leading-8 md:leading-0'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-xl md:text-3xl font-medium'> Hey there! I&apos;m Gathan👋</h1>
        <p className='font-light '> 
          I&apos;m a technial support, web developer (mostly doing frontends), and a SysAdmin enthusiast. Currently, I&apos;m working full-time at <Link href="https://hosting.com" target="_blank" className='bg-gradient-to-r from-pink-400 to-yellow-500 inline-block text-transparent bg-clip-text'> Hosting.com </Link> as a technical supervisor, but I'm always open to building cool projects :) 
        </p>
      </div>
      <div className='w-full h-96 grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-5  bg-opacity-30'>
        <div className='w-full h-full bg-neutral-500 rounded overflow-hidden col-start-1 row-span-2'> 
          <Image priority quality={75} src={Self2} alt="A picture of a camera" className='w-full h-full object-cover' />
        </div>
        <div className='w-full h-full bg-neutral-500 rounded overflow-hidden col-start-1 row-start-3 md:col-start-2 md:row-start-1'> 
          <Image priority quality={75} src={WebcentralTeam} alt="A picture of a camera" className='w-full h-full object-cover' />
        </div>
        <div className='w-full h-full bg-neutral-500 rounded  overflow-hidden col-start-2 row-start-1 md:row-start-2'> 
          <Image priority quality={75} src={Self1} alt="A picture of a camera" className='w-full h-full object-cover' />
        </div>
        <div className='w-full h-full bg-neutral-500 rounded overflow-hidden col-start-2 row-span-2 md:col-start-3 md:row-span-2'> 
          <Image priority quality={75} src={Self3} alt="A picture of a camera" className='w-full h-full object-cover' />
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <p className='font-light '> 
          Lately, I&apos;ve written content on my blog. I try to keep things simple. You&apos;ll find writing about technologies I&apos;m interested in at the time, how I&apos;m learning, or sharing knowledge along the way.
        </p>
      </div>
      <div className='flex flex-col gap-5'>
        <BlogAnchor 
          href='/blog/wheel-of-life' 
          title='The Wheel of Life'
          summary='They wish for things to be simple, wondering why there are so many complicated issues.' 
        />
        <BlogAnchor 
          href='/blog/phenomena-when-learning' 
          title='Impostor Sydnrome and The Dunning-Kruger Effect'
          summary='The correlation between impostor syndrome and the Dunning-Kruger effect' 
        />
      </div>
      {/*
      <div className='flex flex-col gap-5'>
        <p className='font-light '>
          Feel free to reach out to me via my socials. Thank you for visiting! 
        </p>
      </div>
       Temporarily disabling this section
      <div className='grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-5'>
        <SocialAnchor 
          src={TwitterPhoto} 
          alt={"Gathan Mahesa's Twitter Profile Picture"} 
          platform='twitter' 
          href='https://twitter.com/veroxida' 
          subtitle='16 Followers' title='@veroxida' 
        />
        <SocialAnchor 
          src={LinkedinPhoto} 
          alt={"Gathan Mahesa's LinkedIn Profile Picture"} 
          platform='linkedin' 
          href='https://linkedin.com/in/gathan' 
          subtitle='46 Connections' title='in/gathan' 
        />
        <SocialAnchor 
          src={GithubPhoto} 
          alt={"Gathan Mahesa's Github Profile Picture"} 
          platform='github' 
          href='https://github.com/gthnmp' 
          subtitle='42 Repositories' title='gthnmp' 
        />
        <SocialAnchor 
          src={EmailPhoto} 
          alt={"Gathan Mahesa's Email Profile Picture"} 
          platform='email' 
          href='mailto:mail@gmahesa.com' 
          subtitle='' title='mail@gmahesa.com' 
        />
      </div>
      */}
    </main>
  )
}
