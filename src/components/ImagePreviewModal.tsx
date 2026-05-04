import { XMarkIcon } from "@heroicons/react/24/outline"
import { ImagePreview } from "../types"

export function ImagePreviewModal({
      preview,
      onClose,
    }: {
          preview: ImagePreview | null
          onClose: () => void
        }) {
    if (!preview) {
    return null
    }

    return (
    <div
      aria-label={preview.alt}
      aria-modal="true"
      className="image-preview-modal"
      onClick={onClose}
      role="dialog"
    >
      <div className="image-preview-modal__backdrop" />
      <figure className="image-preview-modal__content" onClick={(event) => event.stopPropagation()}>
        <button
          aria-label="Close expanded image"
          className="image-preview-modal__close"
          onClick={onClose}
          type="button"
        >
          <XMarkIcon aria-hidden="true" />
        </button>
        <img alt={preview.alt} src={preview.src} />
        {preview.caption ? <figcaption>{preview.caption}</figcaption> : null}
      </figure>
    </div>
    )
}
