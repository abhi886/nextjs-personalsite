import React from 'react';

const index = () => {
  return (
    <section className="px-4 lg:px-48 min-h-screen lg:py-8 dark:bg-personal_blue">
      <h1 className="pb-4 pt-8 text-3xl dark:text-personal_blue-textTitle text-gray-800 font-semibold text-center  mx-auto">
        <strong>My</strong> Timeline
      </h1>
      <p className="prose max-w-none prose-gray dark:prose-invert text-center">
        I write about my journey of becoming a Software Engineer in Australia.
      </p>
      <div className="w-full max-w-3xl mx-auto">
        {/* Vertical Timeline #1 --> */}
        <div className="my-6">
          {/* Item #1 --> */}
          <div className="relative pl-8 sm:pl-32 py-6 group">
            {/* <!-- Purple label --> */}
            <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0 dark:text-personal_blue-text">
              The origin
            </div>
            {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
            <div className="flex flex-col sm:flex-row items-start mb-1 before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-red-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                May, 2020
              </time>

              <div className="text-xl font-bold text-slate-900 dark:text-personal_blue-textTitle">
                Acme was founded in Milan, Italy
              </div>
            </div>
            {/* <!-- Content --> */}
            <div className="text-slate-500">
              Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
              Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
              risus.
            </div>
          </div>
          <div className="relative pl-8 sm:pl-32 py-6 group">
            {/* <!-- Purple label --> */}
            <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0 dark:text-personal_blue-text">
              The origin
            </div>
            {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
            <div className="flex flex-col sm:flex-row items-start mb-1 before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-red-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                Aug, 2023
              </time>

              <div className="text-xl font-bold text-slate-900 dark:text-personal_blue-textTitle">
                Got an offer to work as an Intern in Australia
              </div>
            </div>
            {/* <!-- Content --> */}
            <div className="text-slate-500">
              Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
              Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
              risus.
            </div>
          </div>
          <div className="relative pl-8 sm:pl-32 py-6 group">
            {/* <!-- Purple label --> */}
            <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0 dark:text-personal_blue-text">
              The origin
            </div>
            {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
            <div className="flex flex-col sm:flex-row items-start mb-1 before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-red-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                May, 2020
              </time>

              <div className="text-xl font-bold text-slate-900 dark:text-personal_blue-textTitle">
                Acme was founded in Milan, Italy
              </div>
            </div>
            {/* <!-- Content --> */}
            <div className="text-slate-500">
              Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
              Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
              risus.
            </div>
          </div>
          <div className="relative pl-8 sm:pl-32 py-6 group">
            {/* <!-- Purple label --> */}
            <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0 dark:text-personal_blue-text">
              The origin
            </div>
            {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
            <div className="flex flex-col sm:flex-row items-start mb-1 before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-red-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                May, 2020
              </time>

              <div className="text-xl font-bold text-slate-900 dark:text-personal_blue-textTitle">
                Acme was founded in Milan, Italy
              </div>
            </div>
            {/* <!-- Content --> */}
            <div className="text-slate-500">
              Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
              Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
              risus.
            </div>
          </div>
          <div className="relative pl-8 sm:pl-32 py-6 group">
            {/* <!-- Purple label --> */}
            <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0 dark:text-personal_blue-text">
              The origin
            </div>
            {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
            <div className="flex flex-col sm:flex-row items-start mb-1 before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-red-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                May, 2020
              </time>

              <div className="text-xl font-bold text-slate-900 dark:text-personal_blue-textTitle">
                Acme was founded in Milan, Italy
              </div>
            </div>
            {/* <!-- Content --> */}
            <div className="text-slate-500">
              Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
              Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
              risus.
            </div>
          </div>
          <div className="relative pl-8 sm:pl-32 py-6 group">
            {/* <!-- Purple label --> */}
            <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0 dark:text-personal_blue-text">
              The origin
            </div>
            {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
            <div className="flex flex-col sm:flex-row items-start mb-1 before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-red-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                May, 2020
              </time>

              <div className="text-xl font-bold text-slate-900 dark:text-personal_blue-textTitle">
                Acme was founded in Milan, Italy
              </div>
            </div>
            {/* <!-- Content --> */}
            <div className="text-slate-500">
              Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
              Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
              risus.
            </div>
          </div>
          <div className="relative pl-8 sm:pl-32 py-6 group">
            {/* <!-- Purple label --> */}
            <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0 dark:text-personal_blue-text">
              The origin
            </div>
            {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
            <div className="flex flex-col sm:flex-row items-start mb-1 before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-red-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                May, 2020
              </time>

              <div className="text-xl font-bold text-slate-900 dark:text-personal_blue-textTitle">
                Acme was founded in Milan, Italy
              </div>
            </div>
            {/* <!-- Content --> */}
            <div className="text-slate-500">
              Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
              Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
              risus.
            </div>
          </div>
        </div>
        {/* End: Vertical Timeline #1 --> */}
      </div>
    </section>
  );
};
export default index;
