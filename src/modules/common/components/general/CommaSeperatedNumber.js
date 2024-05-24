import React from 'react'
import { NumericFormat } from 'react-number-format'

const CommaSeperatedNumber = ({ number, prefix, suffix, className, dollarSign = false, displayType = 'text', onChange }) => {
    return (
        <NumericFormat
            displayType={displayType}
            value={number}
            className={className}
            prefix={dollarSign ? "$" : prefix}
            suffix={suffix}
            thousandSeparator=","
            {...onChange && {
                onValueChange: (values) => onChange(values.floatValue)
            }}
        />
    )
}

export default CommaSeperatedNumber