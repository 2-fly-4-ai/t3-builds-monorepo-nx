import Image from 'next/image';
import React from 'react';
import Container from '../../components-nextly/container';

const Benefits = (props) => {
  const { data } = props;
  return (
    <>
      <section className="mx-auto mb-20 flex max-w-7xl flex-wrap lg:flex-nowrap lg:gap-10">
        <div
          className={`flex w-full items-center justify-center lg:w-1/2 ${
            props.imgPos === 'right' ? 'lg:order-1' : ''
          }`}
        >
          <div>
            <Image
              src={
                'https://thurrott.s3.amazonaws.com/wp-content/uploads/sites/2/2023/01/GitHub.jpeg'
              }
              width="521"
              height="521"
              alt="Benefits"
              className={' w-full object-cover'}
            />
          </div>
        </div>

        <div
          className={`flex w-full flex-wrap items-center justify-center lg:w-1/2 ${
            data.imgPos === 'right' ? 'lg:justify-end' : ''
          }`}
        >
          <div>
            <div className=" flex w-full flex-col">
              <h3 className="mt-3 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-5xl lg:leading-tight">
                {data.title}
              </h3>

              <p className="max-w-2xl py-2 text-lg leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-xl">
                {data.desc}
              </p>
            </div>

            <div className="mt-2 flex w-full flex-col justify-center">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function Benefit(props) {
  return (
    <>
      <div className="mt-4 flex items-start space-x-3">
        <div className="mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
          {React.cloneElement(props.icon, {
            className: 'w-7 h-7 text-indigo-50',
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className=" text-gray-500 dark:text-gray-400">{props.children}</p>
        </div>
      </div>
    </>
  );
}

export default Benefits;
