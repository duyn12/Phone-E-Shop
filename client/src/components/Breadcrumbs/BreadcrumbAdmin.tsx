'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BreadcrumbAdmin()  {
    const pathname = usePathname(); // Lấy pathname từ usePathname()
    const [pathSegments, setPathSegments] = useState<string[]>([]);

    useEffect(() => {
        // Mỗi khi pathname thay đổi, cập nhật các segment
        const path = pathname.split('/').filter((segment) => segment);
        setPathSegments(path);
    }, [pathname]); // useEffect sẽ chạy lại khi pathname thay đổi

    return (
        <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
                {pathSegments.map((segment, index) => {
                    // Tạo đường dẫn đầy đủ đến segment hiện tại
                    const href = '/' + pathSegments.slice(0, index + 1).join('/');
                    
                    // Tạo tên hiển thị bằng cách viết hoa chữ cái đầu tiên
                    const displayName = segment.charAt(0).toUpperCase() + segment.slice(1);

                    return (
                        <BreadcrumbItem key={href}>
                            {index !== pathSegments.length - 1 ? (
                                <>
                                    <BreadcrumbLink asChild>
                                        <Link href={href}>{displayName}</Link>
                                    </BreadcrumbLink>
                                    <BreadcrumbSeparator />
                                </>
                            ) : (
                                <BreadcrumbPage>{displayName}</BreadcrumbPage>
                            )}
                        </BreadcrumbItem>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
