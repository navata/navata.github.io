import classNames from "classnames";
import React from "react";

const Item = ({ left = "", right = "", className = "" }) => {
    return (
        <div className={classNames("row mb-2", className)}>
            <div className="col-md-6">
                <div class="form-check">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        disabled
                        checked
                    />
                    <label>{left}</label>
                </div>
            </div>
            <div className="col-md-6">
                <div class="form-check">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        disabled
                        checked
                    />
                    <label>{right}</label>
                </div>
            </div>
        </div>
    );
};

export default Item;
