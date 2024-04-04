//export let pvtkey: string = '';
// https://github.com/ordinals/ord/blob/master/src/media.rs

//https://github.com/sCrypt-Inc/scrypt-ord/blob/master/src/contentType.ts

export const ContentType = {
  APPLICATION_BSV20: 'application/bsv-20',
  BSV20: 'application/bsv-20',
  APPLICATION_CBOR: 'application/cbor',
  CBOR: 'application/cbor',
  APPLICATION_JSON: 'application/json',
  JSON: 'application/json',
  APPLICATION_PDF: 'application/pdf',
  PDF: 'application/pdf',
  APPLICATION_PGP_SIGNATURE: 'application/pgp-signature',
  PGP_SIGNATURE: 'application/pgp-signature',
  APPLICATION_PROTOBUF: 'application/protobuf',
  PROTOBUF: 'application/protobuf',
  APPLICATION_YAML: 'application/yaml',
  YAML: 'application/yaml',
  AUDIO_FLAC: 'audio/flac',
  FLAC: 'audio/flac',
  AUDIO_MPEG: 'audio/mpeg',
  MPEG: 'audio/mpeg',
  AUDIO_WAV: 'audio/wav',
  WAV: 'audio/wav',
  FONT_OTF: 'font/otf',
  OTF: 'font/otf',
  FONT_TTF: 'font/ttf',
  TTF: 'font/ttf',
  FONT_WOFF: 'font/woff',
  WOFF: 'font/woff',
  FONT_WOFF2: 'font/woff2',
  WOFF2: 'font/woff2',
  IMAGE_APNG: 'image/apng',
  APNG: 'image/apng',
  IMAGE_AVIF: 'image/avif',
  AVIF: 'image/avif',
  IMAGE_GIF: 'image/gif',
  GIF: 'image/gif',
  IMAGE_JPEG: 'image/jpeg',
  JPEG: 'image/jpeg',
  JPG: 'image/jpeg',
  IMAGE_PNG: 'image/png',
  PNG: 'image/png',
  IMAGE_SVG_XML: 'image/svg+xml',
  SVG_XML: 'image/svg+xml',
  IMAGE_WEBP: 'image/webp',
  WEBP: 'image/webp',
  MODEL_GLTF_JSON: 'model/gltf+json',
  GLTF_JSON: 'model/gltf+json',
  MODEL_GLTF_BINARY: 'model/gltf-binary',
  GLTF_BINARY: 'model/gltf-binary',
  MODEL_STL: 'model/stl',
  STL: 'model/stl',
  TEXT: 'text/plain',
  TEXT_UTF8: 'text/plain;charset=utf-8',
  TEXT_CSS: 'text/css',
  CSS: 'text/css',
  TEXT_HTML: 'text/html',
  HTML: 'text/html',
  TEXT_HTML_UTF8: 'text/html;charset=utf-8',
  TEXT_JAVASCRIPT: 'text/javascript',
  JAVASCRIPT: 'text/javascript',
  TEXT_MARKDOWN: 'text/markdown',
  MARKDOWN: 'text/markdown',
  TEXT_MARKDOWN_UTF8: 'text/markdown;charset=utf-8',
  VIDEO_MP4: 'video/mp4',
  MP4: 'video/mp4',
  VIDEO_WEBM: 'video/webm',
  WEBM: 'video/webm',
} as const


export const RetContentType: string[] = [
  'application/bsv-20',  '000000',
  'application/cbor',  '000000',
  'application/json',  '000000',
  'application/pdf',  '00000b',
  'application/pgp-signature',  '000000',
  'application/protobuf',  '000000',
  'application/yaml',  '000000',
  'audio/flac',  '000000',
  'audio/mpeg',  '000009',
  'audio/wav',  '000013',
  'font/otf',  '000000',
  'font/ttf',  '000000',
  'font/woff',  '000000',
  'font/woff2',  '000000',
  'image/apng',  '000000',
  'image/avif',  '000000',
  'image/gif',  '000000',
  'image/jpeg',  '000004',
  'image/png',  '00000c',
  'image/svg+xml',  '000000',
  'image/webp',  '000019',
  'model/gltf+json',  '000000',
  'model/gltf-binary',  '000000',
  'model/stl',  '000000',
  'text/plain', '000001',
  'text/plain;charset=utf-8', '000001',
  'text/css', '000001',
  'text/html',  '00001a',
  'text/html;charset=utf-8',  '00001a',
  'text/javascript',  '000000',
  'text/markdown',  '000000',
  'text/markdown;charset=utf-8',  '000000',
  'video/mp4',  '000008',
  'video/webm', '000000']