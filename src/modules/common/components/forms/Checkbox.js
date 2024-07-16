import React from "react";
import clsx from "classnames";

const Checkbox = ({ checked, onChange, label, hasError, className, ...rest }) => {
	return (
		<label className="flex items-center space-x-2">
			<input
				type="checkbox"
				checked={checked}
				onChange={onChange}
				className={clsx(
					"w-5 h-5 text-blue-500 rounded-md border border-gray-300 focus:ring-0 focus:outline-none focus:border-blue-300",
					{ "border-red-500": hasError }
				)}
				{...rest}
			/>
			<span className="text-base">{label}</span>
		</label>
	);
};

export default Checkbox;
