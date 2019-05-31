import React from "react";

const Page = (props) => {
    return (
        <div className='page pl-2 pr-2'>
            <div className='section margin-small margin-bottom '>
                <div className='section-name'>
                    { props.name }
                </div>
                <div className={'d-flex flex-row'}>
                    { props.action &&
                        props.action
                    }
                </div>
            </div>

            <div className='page-content'>
                {props.children}
            </div>
        </div>
    )
}

export default Page;
