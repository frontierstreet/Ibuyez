import React from 'react'
import clsx from 'classnames'
import { ReactComponent as ArrowLeftBig } from 'modules/common/assets/icons/arrow-left-big.svg'
import { ReactComponent as ArrowRightBig } from 'modules/common/assets/icons/arrow-right-big.svg'
import { ReactComponent as LeftAngle } from 'modules/common/assets/icons/left-angle.svg'
import { ReactComponent as RightAngle } from 'modules/common/assets/icons/right-angle.svg'

const Pagination = ({ metadata, onPageChange }) => {

    if (!metadata) {
        return null
    }

    const { nextPage, totalPages, currentPage } = metadata;
    const getPageButtons = () => {
        const maxPageButtons = 7; // Total number of page buttons to show, including ellipsis
        const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
        const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
        const pageButtons = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

        // Add ellipsis if there are more pages before and after the displayed range
        if (startPage > 1) {
            pageButtons.unshift('ellipsis-left');
        }
        if (endPage < totalPages) {
            pageButtons.push('ellipsis-right');
        }

        return pageButtons;
    };

    const pageButtons = getPageButtons();

    return (
        <div className="py-[37px] lg:py-[55px] flex items-center justify-center px-5">
            <div className="flex items-center space-x-[29px] lg:space-x-[149.15px]">
                {pageButtons.length ? <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={!currentPage || (currentPage - 1) === 0}
                    className={clsx('disabled:opacity-30 disabled:cursor-not-allowed')}
                >
                    <div className="lg:h-[30.95px] lg:bg-_25253C lg:w-[65.85px] flex items-center justify-center">
                        <ArrowLeftBig className='hidden lg:block' />
                        <LeftAngle className='block lg:hidden' />
                    </div>
                </button> : null}
                <div className="flex space-x-[15px]">
                    {pageButtons.map((page, index) => (
                        <React.Fragment key={index}>
                            {page === 'ellipsis-left' ? (
                                <span className="text-sm font-bold text-[#848484]">...</span>
                            ) : page === 'ellipsis-right' ? (
                                <span className="text-sm font-bold text-[#848484]">...</span>
                            ) : (
                                <button
                                    disabled={page === currentPage}
                                    className={clsx('h-6 w-[41px] border-E8EBEC border text-sm font-bold text-[#848484] disabled:cursor-not-allowed', {
                                        '!text-_25253C !border-_25253C': page === currentPage,
                                    })}
                                    onClick={() => onPageChange(page)}
                                >
                                    {page}
                                </button>
                            )}
                        </React.Fragment>
                    ))}
                </div>
                {pageButtons.length ? <button
                    onClick={() => onPageChange(nextPage)}
                    disabled={nextPage > totalPages || !nextPage}
                    className="disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    <div className="lg:h-[30.95px] lg:bg-_25253C lg:w-[65.85px] flex items-center justify-center">
                        <ArrowRightBig className='hidden lg:block' />
                        <RightAngle className='block lg:hidden' />
                    </div>
                </button> : null}
            </div>
        </div>
    )
}



export default Pagination