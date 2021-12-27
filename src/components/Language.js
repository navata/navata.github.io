import classNames from "classnames";
import React from "react";

const Language = ({item, className }) => {
    const { title, point } = item;
    return (
        <div className="mb-3">
            <span>{title}</span>
            <div className="my-1">
                <div className="progress">
                    <div
                        className={classNames("progress-bar", className)}
                        role="progressbar"
                        style={{ width: `${point}%` }}
                        ariaValueNow={point}
                        ariaValueMin="0"
                        ariaValueMax="100"
                    />
                </div>
            </div>
        </div>
    );
};

export default Language;
