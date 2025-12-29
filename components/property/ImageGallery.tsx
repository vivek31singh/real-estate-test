'use client';

import { useState } from 'react';
import { Image as ImageIcon, Maximize2, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Modal,
  ModalContent,
  ModalOverlay,
  ModalPortal,
  ModalClose,
} from '@/components/ui/Modal';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
        <ImageIcon className="w-8 h-8 text-gray-400" />
        <span className="ml-2 text-gray-500">No images available</span>
      </div>
    );
  }

  const handleThumbnailClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleMainImageClick = () => {
    setIsModalOpen(true);
  };

  const handleThumbnailModalClick = (index: number) => {
    setSelectedImage(index);
    setIsModalOpen(true);
  };

  const goToPreviousImage = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNextImage = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="space-y-4">
        {/* Main Image */}
        <div className="relative group cursor-pointer" onClick={handleMainImageClick}>
          <img
            src={images[selectedImage]}
            alt={`${title} - Image ${selectedImage + 1}`}
            className="w-full aspect-video object-cover rounded-lg"
          />
          <button
            onClick={handleMainImageClick}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Maximize2 className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {selectedImage + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailModalClick(index)}
              className={cn(
                "aspect-video rounded-lg overflow-hidden border-2 transition-all relative group",
                selectedImage === index
                  ? "border-blue-500"
                  : "border-transparent hover:border-gray-300"
              )}
            >
              <img
                src={image}
                alt={`${title} - Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Maximize2 className="w-6 h-6 text-white" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
      <Modal open={isModalOpen} onOpenChange={setIsModalOpen}>
        <ModalPortal>
          <ModalOverlay className="bg-black/90" />
          <ModalContent className="max-w-6xl w-full p-0 border-0 bg-transparent shadow-none">
            <div className="relative w-full flex items-center justify-center">
              {/* Close Button */}
              <ModalClose className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors">
                <X className="w-6 h-6" />
              </ModalClose>

              {/* Previous Button */}
              {images.length > 1 && (
                <button
                  onClick={goToPreviousImage}
                  className="absolute left-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Image */}
              <img
                src={images[selectedImage]}
                alt={`${title} - Full view`}
                className="w-full max-h-[85vh] object-contain rounded-lg"
              />

              {/* Next Button */}
              {images.length > 1 && (
                <button
                  onClick={goToNextImage}
                  className="absolute right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}

              {/* Image Counter */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                  {selectedImage + 1} / {images.length}
                </div>
              )}
            </div>
          </ModalContent>
        </ModalPortal>
      </Modal>
    </>
  );
}