import React from 'react';
import { useParams } from 'react-router-dom';
import { situations } from '../components/landing/situations';
import { NavigationWrapper } from "../../common/components"
import { HeroForm } from '../components';

const SituationTemplate = () => {
  const { situationId } = useParams();
  const situation = situations.find(s => s.id === situationId);

//   Handle situation not found scenario
  if (!situation) {
    return <div>Situation not found. Check URL.</div>;
  }

  return (
    <NavigationWrapper>
     <div className="p-4 pt-[200px]  bg-blue flex flex-col items-center gap-5">
      <h1 className="text-3xl   md:text-[60px]  max-w-[1000px] text-center md:leading-[60px] text-black font-bold mb-4">{situation.header}</h1>
      <p className='text-black max-w-[600px] text-center text-base md:text-[20px] '>{situation.content}</p>
      <HeroForm/>
     </div>

    </NavigationWrapper>
  );
};

export default SituationTemplate;