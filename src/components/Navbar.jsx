import React from "react"


export default function Navbar() {
  return (
    <nav class="bg-purple-400">
        <div class="relative flex h-20 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ml-6">
              <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
              <div className="text-body text-">
              <h4 className="mt-0 ml-3 text-white">ระบบติดตามข้อสั่งการอธิบดี</h4>
              <h6 className="ml-3 font-24px text-yellow-400">กองยุทธศาสตร์ และแผนงาน</h6>
            </div>
          </div>
        </div>  


    </nav>
  );
}