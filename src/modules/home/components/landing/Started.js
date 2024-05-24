import React,{useState}from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import toast from 'react-hot-toast'
import {  useForm } from "react-hook-form";
import {  Button  } from "../../../common/components";

const defaultValues ={
    address: "",
  }

const Started = () => {
    const [query, setQuery] = useState(null)
    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
        clearErrors,
      } = useForm({
        defaultValues,
      });
  return (
    <div className='bg-blue px-4  max-w-[90%] py-10 950:py-20 flex flex-col items-center 950:max-w-[1200px] mx-auto my-[100px] rounded-[40px]'>
        <div>
         <h3 className='md:text-[60px] flex-1 md:leading-[75px] text-center   950:text-[55px] 950:leading-[96px] text-[30px] leading-[49.24px] text-white font-black'>
            Get Started with IbuyEZ<br className='hidden md:block'/>  Today
         </h3>
         <p className='text-normal text-white mb-5 text-[14px] text-center mt-4 leading-[28.03px] md:text-[16px] md:leading-[32px] 950:text-[20px] 950:leading-[38.4px]'>
            And stay up to 3 days after so you don't have to rush to move. Pretty sweet, huh?
        </p>
            <div className='flex flex-col  md:flex-row items-center gap-4  md:max-w-[600px] mx-auto'>
             <GooglePlacesAutocomplete
                    apiKey={"AIzaSyDLQqQd-GhDUzCvNclvZEpuxVUFICYcfXY"}
                    debounce={500}
                    minLengthAutocomplete={4}
                    onLoadFailed={(error) => (
                        toast.error("Could not inject Google script. Please reload the page", error)
                    )}
                    selectProps={{
                        isClearable: true,
                        placeholder: "Enter Home Address",
                        query,
                        onChange: setQuery,
                        components: {
                            IndicatorSeparator: null,
                            // DropdownIndicator: () => <Search />
                        },
                        classNames: {
                            container: () => ` `,
                            control: state => '!border-none !outline-none w-[350px] 950:w-[450px] !px-4  !rounded-[10px]  !h-[60px] !pl-0 !-none  outline-none border-none text-base text-_25253C placeholder:text-placeholder'
                        }
                    }}
                />
                <button type='Submit' className='bg-[#fddf14] h-[60px] text-[20px] font-normal w-[150px] rounded-[10px]'>
                   Start
                </button>
            </div>
        </div>
    </div>
  )
}

export default Started