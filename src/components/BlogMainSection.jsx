import React from 'react';
import { Link } from 'react-router-dom';

import ecommerce from '../assets/ecommerce.jpg';
import digitalMarketing from '../assets/digital-marketing.png';
import ICTTools from '../assets/ICT-tools-for-small-businesses.png';
import Cybersecurity from '../assets/cybersecurity-basics.jpg';
import automatingTasks from '../assets/Automating-Tasks-with-ICT.jpg';

export default function BlogMainSection() {
  return (
    <div className="container flex flex-col justify-center items-center px-16 py-20 ">
      <p className="p-4 mb-4 text-5xl font-semibold bg-gradient-to-r  from-[#6549D5] via-[#E33FA1] to-[#FB5343] inline-block text-transparent bg-clip-text">
        Blog
      </p>

      <div className="grid gap-4 grid-cols-3">
        <Link
          to={`/blog/how-can-ecommerce-help-your-businesss`}
          className="mx-3 flex flex-col justify-between bg-[#f5f8fa] rounded-xl"
        >
          <img
            className="rounded-t-xl mx-auto "
            src={ecommerce}
            alt=""
            srcset=""
          />
          <div className="p-4">
            <p className="text-lg font-semibold my-2">
              How Can E-Commerce Help Your Businesss?
            </p>
          </div>
        </Link>

        <Link
          to={`/blog/digital-marketing-strategies-reaching-your-target-audienceOnline`}
          className="mx-3 flex justify-between flex-col bg-[#f5f8fa] rounded-xl"
        >
          <div>
            <img
              className="rounded-t-xl mx-auto "
              src={digitalMarketing}
              alt=""
              srcset=""
            />
          </div>
          <div className="p-4">
            <p className="text-lg font-semibold my-2">
              Digital Marketing Strategies: Reaching Your Target Audience Online
            </p>
          </div>
        </Link>

        <Link
          to={`/blog/essential-ICT-tools-for-small-business-success`}
          className="mx-3 flex justify-between flex-col bg-[#f5f8fa] rounded-xl"
        >
          <img
            className="rounded-t-xl mx-auto "
            src={ICTTools}
            alt=""
            srcset=""
          />
          <div className="p-4">
            <p className="text-lg font-semibold my-2">
              Getting Started with ICT: Essential Tools for Small Business
              Success
            </p>
          </div>
        </Link>
        <Link
          to={`/blog/cybersecurity-basics-protecting-your-business-in-the-digital-age`}
          className="mx-3 flex justify-between flex-col bg-[#f5f8fa] rounded-xl"
        >
          <img
            className="rounded-t-xl mx-auto "
            src={Cybersecurity}
            alt=""
            srcset=""
          />
          <div className="p-4">
            <p className="text-lg font-semibold my-2">
              Cybersecurity Basics: Protecting Your Business in the Digital Age
            </p>
          </div>
        </Link>
        <Link
          to={`/blog/boosting-efficiency-automating-tasks-with-ICT-solutions-for-small-businesses`}
          className="mx-3 flex justify-between flex-col bg-[#f5f8fa] rounded-xl"
        >
          <img
            className="rounded-t-xl mx-auto "
            src={automatingTasks}
            alt=""
            srcset=""
          />
          <div className="p-4">
            <p className="text-lg font-semibold my-2">
              Boosting Efficiency: Automating Tasks with ICT Solutions for Small
              Businesses
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
