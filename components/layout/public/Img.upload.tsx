import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverDescription,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger,
} from "@/components/ui/popover"
import ImgForm from "@/components/form/img-form";
export const ImgUpload = () => {
    return (
        <Popover>
            <PopoverTrigger >
                Upload Image
            </PopoverTrigger>

            <PopoverContent className="w-[380px] p-0">
                <PopoverHeader className="border-b px-4 py-3">
                    <PopoverTitle>Upload Image</PopoverTitle>
                    <PopoverDescription>
                        Choose an image for your profile or product.
                    </PopoverDescription>
                </PopoverHeader>
               
                <ImgForm />
            </PopoverContent>
        </Popover>
    );
};