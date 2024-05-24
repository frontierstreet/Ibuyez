import React from 'react'
import clsx from 'classnames'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const PhoneNumberInput = ({ value, onChange, hasError, ref_, className, ...rest }) => {
    return (
        <PhoneInput
            defaultCountry='US'
            ref={ref_}
            value={value}
            onChange={onChange}
            className={clsx('h-[35.28px] lg:h-[59.98px] text-[9.41px] lg:text-base leading-[14.12px] lg:leading-6 w-full border-none outline-none rounded-[7.93px] lg:rounded-[13.48px] px-[12.69px] lg:px-[21.57px] bg-white placeholder:text-C9C7C7'
                , className, { "!border !border-[red] !border-solid": hasError })}
            {...rest}
        />
    )
}

export default PhoneNumberInput