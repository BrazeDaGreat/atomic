import React from "react";

interface TopAppBarOptions {
  shade: string;
  leftOptions?: Array<JSX.Element>;
  rightOptions?: Array<JSX.Element>;
  title: string;
}

const TopAppBar: React.FC<TopAppBarOptions> = ({
  shade,
  leftOptions,
  rightOptions,
  title,
}) => {
  return (
    <div className={`bg-${shade}-600 p-4 flex justify-between items-center`}>
      <div className="flex items-center space-x-4">
        {leftOptions &&
          leftOptions.map((option, index) => <div key={index}>{option}</div>)}
      </div>
      <h1 className="text-white text-xl font-semibold">{title}</h1>
      <div className="flex items-center space-x-4">
        {rightOptions &&
          rightOptions.map((option, index) => <div key={index}>{option}</div>)}
      </div>
    </div>
  );
};

export default TopAppBar;
