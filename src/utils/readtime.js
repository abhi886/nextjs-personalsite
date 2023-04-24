// eslint-disable-next-line import/no-extraneous-dependencies
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

export default function readingTime(data) {
  const text = documentToPlainTextString(data);
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}
