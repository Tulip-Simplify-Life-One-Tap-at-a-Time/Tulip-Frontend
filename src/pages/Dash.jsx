import React from 'react';

export default function ProductivityDashboard() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
      style={{
        '--checkbox-tick-svg': "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(248,250,252)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e')",
        fontFamily: 'Inter, "Noto Sans", sans-serif'
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-80">
            <div className="flex h-full min-h-[700px] flex-col justify-between bg-slate-50 p-4">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#0d141c] text-base font-medium leading-normal">My Dashboard</h1>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#e7edf4]">
                    <div className="text-[#0d141c]" data-icon="ListBullets" data-size="24px" data-weight="fill">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M56,128a16,16,0,1,1-16-16A16,16,0,0,1,56,128ZM40,48A16,16,0,1,0,56,64,16,16,0,0,0,40,48Zm0,128a16,16,0,1,0,16,16A16,16,0,0,0,40,176Zm176-64H88a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V120A8,8,0,0,0,216,112Zm0-64H88a8,8,0,0,0-8,8V72a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48Zm0,128H88a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V184A8,8,0,0,0,216,176Z"
                        />
                      </svg>
                    </div>
                    <p className="text-[#0d141c] text-sm font-medium leading-normal">Productivity &amp; Organization</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="text-[#0d141c]" data-icon="CurrencyDollar" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z"
                        />
                      </svg>
                    </div>
                    <p className="text-[#0d141c] text-sm font-medium leading-normal">Finance and Money Management</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="text-[#0d141c]" data-icon="Briefcase" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"
                        />
                      </svg>
                    </div>
                    <p className="text-[#0d141c] text-sm font-medium leading-normal">Career and Professional Growth</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="text-[#0d141c]" data-icon="Heart" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"
                        />
                      </svg>
                    </div>
                    <p className="text-[#0d141c] text-sm font-medium leading-normal">Health and Wellness</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="text-[#0d141c]" data-icon="House" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"
                        />
                      </svg>
                    </div>
                    <p className="text-[#0d141c] text-sm font-medium leading-normal">Home &amp; Life Skills</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="text-[#0d141c]" data-icon="Airplane" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M235.58,128.84,160,91.06V48a32,32,0,0,0-64,0V91.06L20.42,128.84A8,8,0,0,0,16,136v32a8,8,0,0,0,9.57,7.84L96,161.76v18.93L82.34,194.34A8,8,0,0,0,80,200v32a8,8,0,0,0,11,7.43l37-14.81,37,14.81A8,8,0,0,0,176,232V200a8,8,0,0,0-2.34-5.66L160,180.69V161.76l70.43,14.08A8,8,0,0,0,240,168V136A8,8,0,0,0,235.58,128.84ZM224,158.24l-70.43-14.08A8,8,0,0,0,144,152v32a8,8,0,0,0,2.34,5.66L160,203.31v16.87l-29-11.61a8,8,0,0,0-5.94,0L96,220.18V203.31l13.66-13.65A8,8,0,0,0,112,184V152a8,8,0,0,0-9.57-7.84L32,158.24v-17.3l75.58-37.78A8,8,0,0,0,112,96V48a16,16,0,0,1,32,0V96a8,8,0,0,0,4.42,7.16L224,140.94Z"
                        />
                      </svg>
                    </div>
                    <p className="text-[#0d141c] text-sm font-medium leading-normal">Travel &amp; Transportation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#0d141c] tracking-light text-[32px] font-bold leading-tight min-w-72">Productivity &amp; Organization</p>
            </div>
            <div className="pb-3">
              <div className="flex border-b border-[#cedae8] px-4 gap-8">
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#0c77f2] text-[#0d141c] pb-[13px] pt-4" href="#">
                  <p className="text-[#0d141c] text-sm font-bold leading-normal tracking-[0.015em]">Task Management</p>
                </a>
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#49709c] pb-[13px] pt-4" href="#">
                  <p className="text-[#49709c] text-sm font-bold leading-normal tracking-[0.015em]">Calendar &amp; Scheduling</p>
                </a>
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#49709c] pb-[13px] pt-4" href="#">
                  <p className="text-[#49709c] text-sm font-bold leading-normal tracking-[0.015em]">Note-Taking &amp; Documentation</p>
                </a>
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#49709c] pb-[13px] pt-4" href="#">
                  <p className="text-[#49709c] text-sm font-bold leading-normal tracking-[0.015em]">Project Management</p>
                </a>
              </div>
            </div>
            <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Task Management</h2>
            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
              <div className="flex size-7 items-center justify-center">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#cedae8] border-2 bg-transparent text-[#0c77f2] checked:bg-[#0c77f2] checked:border-[#0c77f2] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#cedae8] focus:outline-none"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#0d141c] text-base font-medium leading-normal line-clamp-1">Complete project proposal</p>
                <p className="text-[#49709c] text-sm font-normal leading-normal line-clamp-2">Due in 2 days</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
              <div className="flex size-7 items-center justify-center">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#cedae8] border-2 bg-transparent text-[#0c77f2] checked:bg-[#0c77f2] checked:border-[#0c77f2] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#cedae8] focus:outline-none"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#0d141c] text-base font-medium leading-normal line-clamp-1">Schedule team meeting</p>
                <p className="text-[#49709c] text-sm font-normal leading-normal line-clamp-2">Due in 3 days</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
              <div className="flex size-7 items-center justify-center">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#cedae8] border-2 bg-transparent text-[#0c77f2] checked:bg-[#0c77f2] checked:border-[#0c77f2] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#cedae8] focus:outline-none"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#0d141c] text-base font-medium leading-normal line-clamp-1">Review client feedback</p>
                <p className="text-[#49709c] text-sm font-normal leading-normal line-clamp-2">Due in 5 days</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
              <div className="flex size-7 items-center justify-center">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#cedae8] border-2 bg-transparent text-[#0c77f2] checked:bg-[#0c77f2] checked:border-[#0c77f2] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#cedae8] focus:outline-none"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#0d141c] text-base font-medium leading-normal line-clamp-1">Prepare presentation slides</p>
                <p className="text-[#49709c] text-sm font-normal leading-normal line-clamp-2">Due in 7 days</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
              <div className="flex size-7 items-center justify-center">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#cedae8] border-2 bg-transparent text-[#0c77f2] checked:bg-[#0c77f2] checked:border-[#0c77f2] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#cedae8] focus:outline-none"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#0d141c] text-base font-medium leading-normal line-clamp-1">Finalize budget report</p>
                <p className="text-[#49709c] text-sm font-normal leading-normal line-clamp-2">Due in 10 days</p>
              </div>
            </div>
            <div className="flex px-4 py-3 justify-end">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7edf4] text-[#0d141c] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Add New Task</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}