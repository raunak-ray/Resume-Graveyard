import React from 'react'
import { Card, CardContent } from '../ui/card'
import { ArrowRight, Dot } from 'lucide-react'
import { Button } from '../ui/button'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "../ui/dialog"

function GraveCard() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className='cursor-pointer rounded-none border-white/5 bg-zinc-950/50 hover:bg-zinc-900/50 transition-colors'>
          <CardContent className='flex flex-col gap-5 p-4 md:p-6'>
            
            <div className='flex flex-col gap-2'>
              <h1 className='text-xl md:text-xl lg:text-2xl tracking-wider font-bold text-zinc-100'>
                John Doe
              </h1>

              <p className='inline-flex items-center gap-1 text-sm md:text-md text-zinc-400'>
                Work At Company
                <Dot className='h-5 w-5 text-zinc-600'/>
                <span>Role</span>
              </p>
            </div>

            <div className='bg-zinc-900/80 px-4 py-4 border border-white/10 flex flex-col gap-2'>
              <h4 className='text-cyan-500 text-[10px] uppercase tracking-widest font-semibold'>
                Epitaph
              </h4>

              <p className='text-sm md:text-md font-nosifer tracking-widest text-red-600 leading-relaxed'>
                “Killed by an ATS after 12 years of building the very tools that rejected me.”
              </p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-4 gap-2'>
              {[1, 2, 3, 4].map((item) => (
                <div
                  className='border border-white/5 bg-zinc-900/30 p-2 text-center text-xs text-zinc-400'
                  key={item}
                >
                  Figma
                </div>
              ))}
            </div>

            <div className='border-t border-white/10 flex justify-between items-center gap-4 pt-4 text-xs text-zinc-500'>
              <p>Killed By ATS</p>

              <Button
                variant="link"
                className='p-0 h-auto inline-flex gap-2 text-xs hover:text-yellow-500 transition-colors cursor-pointer text-zinc-400'
              >
                Open Profile
                <ArrowRight className='h-3 w-3' />
              </Button>
            </div>

          </CardContent>
        </Card>
      </DialogTrigger>

      {/* Modal Content */}
      <DialogContent className="bg-zinc-950 rounded-none border-white/10 text-zinc-100 max-w-2xl sm:max-w-xl px-6 overflow-y-auto max-h-[90vh] mx-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl tracking-wider">
            John Doe
          </DialogTitle>

          <DialogDescription className="text-zinc-400 flex flex-col gap-1">
            Senior Product Designer at Company
            <span className='inline-flex gap-1'>
              Location
              <Dot />
              <span>Engineering</span>
            </span>
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 flex flex-col gap-6">

        <div className='bg-zinc-900/80 px-4 py-4 border border-white/10 flex flex-col gap-2'>
              <h4 className='text-cyan-500 text-[10px] uppercase tracking-widest font-semibold'>
                Epitaph
              </h4>

              <p className='text-sm md:text-lg font-nosifer tracking-widest text-red-600 leading-relaxed'>
                “Killed by an ATS after 12 years of building the very tools that rejected me.”
              </p>

              <p className='text-xs text-white/60'>
                Cause Of Death - Laid off by Big Tech
              </p>
            </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-white/60 mb-2">
              Surviving Skills
            </h3>

            <div className="flex flex-wrap gap-3">
              {["Figma", "React", "UX", "Tailwind"].map((skill) => (
                <div
                  key={skill}
                  className="border border-white/10 bg-zinc-900 px-3 py-1 text-sm text-zinc-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          
          <div className='bg-zinc-900/80 px-4 py-2 border-2 border-white/10 border-dotted'>
              <h2 className='text-cyan-500 text-xs'>Resume preview</h2>
          </div>

          <div className='flex flex-col sm:grid sm:grid-cols-3 gap-3'>
            <Button className='bg-white text-black font-bold tracking-tighter sm:tracking-wide rounded-none border-2 hover:bg-cyan-200/60 cursor-pointer uppercase h-auto py-3 text-[11px] sm:text-[12px] outline-0'
            >
              Resurrect This Candidate 
            </Button>
            <Button className='rounded-none bg-zinc-900/80 border-2 border-zinc-800 hover:border-cyan-500/50 hover:text-cyan-400 cursor-pointer uppercase h-auto py-3 text-[11px] sm:text-[13px]'>
              Download Resume
            </Button>
            <Button className='rounded-none bg-transparent border-0 border-b border-transparent hover:border-b-2 hover:border-cyan-400 hover:text-cyan-400 uppercase tracking-tight sm:tracking-wider cursor-pointer h-auto py-3 text-[11px] sm:text-[13px]'>
              Share Grave Link
            </Button>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  )
}

export default GraveCard