import Image from 'next/image'
import React from 'react'

import Rate from '@/components/web/Rate'
import ao from '@/assets/images/ao-len.jpg'
import { CustomCard } from '@/app/(root)/_components'
import DescriptionProduct from './DescriptionProduct'
const InforProduct = () => {
    return (
        <div className=' basis-[60%] '>
            <div className='p-3 bg-white rounded-lg w-full mb-4'>
                {/* name  */}
                <h2 className='text-lg font-medium text-black mb-2'>Áo Thun 3 Lỗ Nữ 2 Chiếc Lá Vải Cotton Co Giãn 4 Chiều Mặc Đẹp Tôn Dáng, Đa Nặng Mặc Tập GYM, Dạo Phố, Tập Thể Dục SN121 Sally Boutique</h2>
                {/* rate  */}
                <div className='flex items-center gap-x-2 mb-2'>
                    <span className='block text-sm text-black'>5.0</span>
                    <Rate number={5} />
                    <span className='block text-sm text-gray-500'>(100)</span>
                    <div className='w-px h-3 bg-gray-500'></div>
                    <span className='block text-sm text-gray-500'>Đã bán 20</span>
                </div>
                {/* price  */}
                <div className='flex gap-x-3 mb-2'>
                    <span className='block text-lg font-semibold text-black'>220.000đ</span>
                    <span className='block text-base text-gray-400 line-through'>220.000đ</span>
                </div>
                {/* option  */}
                <div className='mb-2'>
                    <h3 className='text-sm font-medium mb-2'>Màu</h3>
                    <div className='flex items-center gap-3 flex-wrap'>
                        <button className='border rounded-lg flex items-center gap-x-2 pl-2 pr-4 py-1'>
                            <div className='overflow-hidden size-11 rounded-md'>
                                <Image src={ao} width={100} height={100} alt='option' className='w-full h-full' />
                            </div>
                            <span className='block text-sm font-medium text-black'>Trắng</span>
                        </button>
                        <button className='border rounded-lg flex items-center gap-x-2 pl-2 pr-4 py-1'>
                            <div className='overflow-hidden size-11 rounded-md'>
                                <Image src={ao} width={100} height={100} alt='option' className='w-full h-full' />
                            </div>
                            <span className='block text-sm font-medium text-black'>Trắng</span>
                        </button>
                        <button className='border rounded-lg flex items-center gap-x-2 pl-2 pr-4 py-1'>
                            <div className='overflow-hidden size-11 rounded-md'>
                                <Image src={ao} width={100} height={100} alt='option' className='w-full h-full' />
                            </div>
                            <span className='block text-sm font-medium text-black'>Trắng</span>
                        </button>
                        <button className='border rounded-lg flex items-center gap-x-2 pl-2 pr-4 py-1'>
                            <div className='overflow-hidden size-11 rounded-md'>
                                <Image src={ao} width={100} height={100} alt='option' className='w-full h-full' />
                            </div>
                            <span className='block text-sm font-medium text-black'>Trắng</span>
                        </button>
                        <button className='border rounded-lg flex items-center gap-x-2 pl-2 pr-4 py-1'>
                            <div className='overflow-hidden size-11 rounded-md'>
                                <Image src={ao} width={100} height={100} alt='option' className='w-full h-full' />
                            </div>
                            <span className='block text-sm font-medium text-black'>Trắng</span>
                        </button>
                        <button className='border rounded-lg flex items-center gap-x-2 pl-2 pr-4 py-1'>
                            <div className='overflow-hidden size-11 rounded-md'>
                                <Image src={ao} width={100} height={100} alt='option' className='w-full h-full' />
                            </div>
                            <span className='block text-sm font-medium text-black'>Trắng</span>
                        </button>
                    </div>
                </div>
                <div className='mb-2'>
                    <h3 className='text-sm font-medium mb-2'>Màu</h3>
                    <div className='flex items-center gap-3 flex-wrap'>
                        <button className='border rounded-lg flex items-center gap-x-2 pl-2 pr-4 py-1'>
                            <div className='overflow-hidden size-11 rounded-md'>
                                <Image src={ao} width={100} height={100} alt='option' className='w-full h-full' />
                            </div>
                            <span className='block text-sm font-medium text-black'>Trắng</span>
                        </button>
                        <button className='border rounded-lg flex items-center gap-x-2 pl-2 pr-4 py-1'>
                            <div className='overflow-hidden size-11 rounded-md'>
                                <Image src={ao} width={100} height={100} alt='option' className='w-full h-full' />
                            </div>
                            <span className='block text-sm font-medium text-black'>Trắng</span>
                        </button>
                        <button className='border rounded-lg flex items-center gap-x-2 pl-2 pr-4 py-1'>
                            <div className='overflow-hidden size-11 rounded-md'>
                                <Image src={ao} width={100} height={100} alt='option' className='w-full h-full' />
                            </div>
                            <span className='block text-sm font-medium text-black'>Trắng</span>
                        </button>
                        <button className='border rounded-lg flex items-center gap-x-2 pl-2 pr-4 py-1'>
                            <div className='overflow-hidden size-11 rounded-md'>
                                <Image src={ao} width={100} height={100} alt='option' className='w-full h-full' />
                            </div>
                            <span className='block text-sm font-medium text-black'>Trắng</span>
                        </button>
                        <button className='border rounded-lg flex items-center gap-x-2 pl-2 pr-4 py-1'>
                            <div className='overflow-hidden size-11 rounded-md'>
                                <Image src={ao} width={100} height={100} alt='option' className='w-full h-full' />
                            </div>
                            <span className='block text-sm font-medium text-black'>Trắng</span>
                        </button>
                        <button className='border rounded-lg flex items-center gap-x-2 pl-2 pr-4 py-1'>
                            <div className='overflow-hidden size-11 rounded-md'>
                                <Image src={ao} width={100} height={100} alt='option' className='w-full h-full' />
                            </div>
                            <span className='block text-sm font-medium text-black'>Trắng</span>
                        </button>
                    </div>
                </div>
            </div>
            <CustomCard
                title='Thông tin chi tiết'
                className='mb-4'
            >
                <div className='flex justify-between pb-2 border-b mb-2'>
                    <h3 className='max-w-[45%] text-sm text-gray-500'>Thương Hiệu</h3>
                    <div className='w-[50%] text-black text-sm'>
                        Addidas
                    </div>
                </div>
                <div className='flex justify-between pb-2 border-b mb-2'>
                    <h3 className='max-w-[45%] text-sm text-gray-500'>Thương Hiệu</h3>
                    <div className='w-[50%] text-black text-sm'>
                        Addidas
                    </div>
                </div>
                <div className='flex justify-between pb-2 border-b mb-2'>
                    <h3 className='max-w-[45%] text-sm text-gray-500'>Thương Hiệu</h3>
                    <div className='w-[50%] text-black text-sm'>
                        Addidas
                    </div>
                </div>
                <div className='flex justify-between pb-2 border-b mb-2'>
                    <h3 className='max-w-[45%] text-sm text-gray-500'>Thương Hiệu</h3>
                    <div className='w-[50%] text-black text-sm'>
                        Addidas
                    </div>
                </div>
                <div className='flex justify-between pb-2 border-b mb-2'>
                    <h3 className='max-w-[45%] text-sm text-gray-500'>Thương Hiệu</h3>
                    <div className='w-[50%] text-black text-sm'>
                        Addidas
                    </div>
                </div>
            </CustomCard>
            <DescriptionProduct />
        </div>
    )
}

export default InforProduct