import React from 'react';
import {
  Box,
  PageBlock,
  Stack,
  Heading,
  Columns,
  Column,
  Autosuggest,
  IconSearch,
  filterSuggestions,
  TextField,
  IconCompany,
  IconLocation,
  Button,
  Inline,
  TextLink,
  Tiles,
  Card,
  Bleed,
  Badge,
  IconNewWindow,
  IconBookmark,
  IconChevron,
  Hidden,
  IconDownload,
  ContentBlock,
  IconSocialFacebook,
  IconSocialTwitter,
  IconSocialLinkedIn,
  IconSocialInstagram,
  Text,
} from '../playroom/components';

import source from '../utils/source.macro';

export const snippets = [
  {
    name: 'Home Page',
    group: 'Pages',
    code: source(
      <>
        <Box background="surface" padding="small">
          <svg
            style={{
              display: 'block',
            }}
            width="260px"
            viewBox="0 0 1000 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M436.1,306.63a5.65,5.65,0,0,0-5.24,2.67c-1.07,1.78-1.61,4.34-1.6,7.7s.53,5.92,1.6,7.7a5.65,5.65,0,0,0,5.23,2.67,5.73,5.73,0,0,0,5.3-2.67Q443,322,443,317t-1.61-7.7A5.66,5.66,0,0,0,436.1,306.63Z"
              transform="translate(-116.78 -257.4)"
              fill="none"
            />
            <path
              d="M545.84,306.44a6.56,6.56,0,0,0-5,1.8,8.5,8.5,0,0,0-2,5.09h13.29a8,8,0,0,0-1.74-5A5.58,5.58,0,0,0,545.84,306.44Z"
              transform="translate(-116.78 -257.4)"
              fill="none"
            />
            <path
              d="M330,318.07a12.78,12.78,0,0,0-1.64-.1,9.79,9.79,0,0,0-5.1,1.13,4.61,4.61,0,0,0-1.14,6.2,4.31,4.31,0,0,0,1.75,1.32,7,7,0,0,0,2.16.52c.77.06,1.44.1,2,.1a11.82,11.82,0,0,0,2-.17l1.71-.28v-8.5h0C331.14,318.2,330.56,318.13,330,318.07Z"
              transform="translate(-116.78 -257.4)"
              fill="none"
            />
            <path
              d="M985.18,300.22a6.82,6.82,0,0,0-6.57,4.08,10.88,10.88,0,0,0-.91,4.24h15a11.07,11.07,0,0,0-.91-4.24A6.87,6.87,0,0,0,985.18,300.22Z"
              transform="translate(-116.78 -257.4)"
              fill="none"
            />
            <path
              d="M363.29,306.63a7.66,7.66,0,0,0-6.44,3.19,9.85,9.85,0,0,0-1.55,3.41,17.16,17.16,0,0,0-.49,4.1,13.35,13.35,0,0,0,.66,4.47,7.26,7.26,0,0,0,1.81,2.93,6.72,6.72,0,0,0,2.72,1.58,11.75,11.75,0,0,0,3.43.48,17.42,17.42,0,0,0,2-.1,10.74,10.74,0,0,0,2-.41V307.15a19.09,19.09,0,0,0-2.13-.42A20.55,20.55,0,0,0,363.29,306.63Z"
              transform="translate(-116.78 -257.4)"
              fill="none"
            />
            <path
              d="M651.6,306.63a5.65,5.65,0,0,0-5.23,2.67c-1.07,1.78-1.61,4.34-1.61,7.7s.54,5.92,1.61,7.7a5.65,5.65,0,0,0,5.23,2.67,5.73,5.73,0,0,0,5.3-2.67q1.62-2.67,1.61-7.7t-1.61-7.7A5.67,5.67,0,0,0,651.6,306.63Z"
              transform="translate(-116.78 -257.4)"
              fill="none"
            />
            <path
              d="M1024,300.22a6.85,6.85,0,0,0-6.58,4.08,11.07,11.07,0,0,0-.91,4.24h15a10.88,10.88,0,0,0-.91-4.24A6.84,6.84,0,0,0,1024,300.22Z"
              transform="translate(-116.78 -257.4)"
              fill="none"
            />
            <path
              d="M274.84,309.53h0v16.29c-.49.09-1,.17-1.61.26a13.57,13.57,0,0,1-2,.13q-6.51,0-9.86-3.9T258,310.49q0-7.9,3.39-11.94t9.7-4a24.8,24.8,0,0,1,4.21.32,30.74,30.74,0,0,1,4.08,1.1c.52-1.24,1-2.48,1.44-3.7a13.84,13.84,0,0,0,.79-3.77,23.86,23.86,0,0,0-5.69-1.61,41.45,41.45,0,0,0-5.9-.36,23.47,23.47,0,0,0-9.5,1.79,19.61,19.61,0,0,0-7,5,22.25,22.25,0,0,0-4.38,7.64,29.29,29.29,0,0,0-1.51,9.56,30.26,30.26,0,0,0,1.45,9.54,20.69,20.69,0,0,0,4.34,7.57,19.74,19.74,0,0,0,7.23,5,26.69,26.69,0,0,0,10.13,1.77,58.42,58.42,0,0,0,6.48-.42,31.8,31.8,0,0,0,7.13-1.64V309.53a32.25,32.25,0,0,0-4.8-.39A31.35,31.35,0,0,0,274.84,309.53Z"
              transform="translate(-116.78 -257.4)"
              fill="#24282b"
            />
            <path
              d="M311.09,300.13a5.92,5.92,0,0,0-1.25-.2c-.57,0-1.08-.06-1.51-.06a8.57,8.57,0,0,0-5.27,1.58,16.92,16.92,0,0,0-3.55,3.57l-.16-1.13c-.07-.45-.15-.9-.23-1.35s-.19-.88-.3-1.29a3.54,3.54,0,0,0-.37-.93c-.61-.12-1.24-.23-1.87-.32a14.09,14.09,0,0,0-1.95-.13,17.82,17.82,0,0,0-1.93.1c-.6.06-1.22.16-1.88.29h0v33.37a21.45,21.45,0,0,0,2.4.25c.77.05,1.53.07,2.27.07s1.51,0,2.3-.07a21.17,21.17,0,0,0,2.37-.25V317.77a14.32,14.32,0,0,1,.82-5.42,7,7,0,0,1,2.07-2.9,5.84,5.84,0,0,1,2.63-1.19,16.14,16.14,0,0,1,2.5-.23h1.1a9.83,9.83,0,0,1,1.62.13,16.69,16.69,0,0,0,.36-2.44c.07-.86.1-1.65.1-2.39s0-1.18-.07-1.74A11.9,11.9,0,0,0,311.09,300.13Z"
              transform="translate(-116.78 -257.4)"
              fill="#24282b"
            />
            <path
              d="M336.89,302.71q-3.84-3.22-10.69-3.22a34.9,34.9,0,0,0-5.39.45,36.24,36.24,0,0,0-5.79,1.42,12.13,12.13,0,0,0,.47,3.54,16.63,16.63,0,0,0,1.38,3.15,24,24,0,0,1,7.56-1.35,21.35,21.35,0,0,1,3,.2,6.05,6.05,0,0,1,2.27.73,4,4,0,0,1,1.45,1.51,5.24,5.24,0,0,1,.52,2.52h0v.77c-1.53-.12-2.93-.19-4.2-.19a25.81,25.81,0,0,0-5.26.55,15.4,15.4,0,0,0-4.77,1.8,10.45,10.45,0,0,0-3.49,3.35,9.41,9.41,0,0,0-1.35,5.19,11.42,11.42,0,0,0,1.11,5.21,9,9,0,0,0,3.09,3.48,13.49,13.49,0,0,0,4.8,1.94,30.12,30.12,0,0,0,6.14.57,38.61,38.61,0,0,0,7.44-.64c1.88-.36,3.75-.81,5.59-1.35V313Q340.73,305.93,336.89,302.71Zm-5.22,24.08-1.71.28a11.82,11.82,0,0,1-2,.17c-.57,0-1.24,0-2-.1a7,7,0,0,1-2.16-.52,4.31,4.31,0,0,1-1.75-1.32,4.61,4.61,0,0,1,1.14-6.2,9.79,9.79,0,0,1,5.1-1.13,12.78,12.78,0,0,1,1.64.1c.61.06,1.19.13,1.71.22h0Z"
              transform="translate(-116.78 -257.4)"
              fill="#24282b"
            />
            <path
              d="M372.11,286.15c-.75,0-1.51,0-2.27.06a22.94,22.94,0,0,0-2.34.26v13.66a12.78,12.78,0,0,0-2.46-.42c-.86-.07-1.68-.1-2.47-.1A18,18,0,0,0,355.4,301a16,16,0,0,0-9,9.4,19.28,19.28,0,0,0-1.22,6.93,19.54,19.54,0,0,0,1.41,7.85,13.91,13.91,0,0,0,3.85,5.25,15.28,15.28,0,0,0,5.62,3,24,24,0,0,0,6.68.94,55.62,55.62,0,0,0,7.73-.48,49.91,49.91,0,0,0,6.28-1.39v-46c-.79-.13-1.58-.21-2.37-.26S372.85,286.15,372.11,286.15Zm-4.61,40.13a10.74,10.74,0,0,1-2,.41,17.42,17.42,0,0,1-2,.1,11.75,11.75,0,0,1-3.43-.48,6.72,6.72,0,0,1-2.72-1.58,7.26,7.26,0,0,1-1.81-2.93,13.35,13.35,0,0,1-.66-4.47,17.16,17.16,0,0,1,.49-4.1,9.85,9.85,0,0,1,1.55-3.41,7.66,7.66,0,0,1,6.44-3.19,20.55,20.55,0,0,1,2.08.1,19.09,19.09,0,0,1,2.13.42Z"
              transform="translate(-116.78 -257.4)"
              fill="#24282b"
            />
            <path
              d="M414.93,324.79h0a29.71,29.71,0,0,1-4.14,1.1,24.53,24.53,0,0,1-4.28.32q-13.61,0-13.61-15.72,0-7.9,3.39-11.94t9.7-4a24.8,24.8,0,0,1,4.21.32,30.19,30.19,0,0,1,4.07,1.1c.54-1.24,1-2.48,1.47-3.7a13.84,13.84,0,0,0,.79-3.77,25.61,25.61,0,0,0-5.75-1.61,40.57,40.57,0,0,0-5.83-.36,23.54,23.54,0,0,0-9.48,1.78,19.76,19.76,0,0,0-7,5,22.28,22.28,0,0,0-4.37,7.63,29.39,29.39,0,0,0-1.51,9.57A30.23,30.23,0,0,0,384,320a20.91,20.91,0,0,0,4.31,7.57,19.35,19.35,0,0,0,7.07,5,25.14,25.14,0,0,0,9.8,1.77,42.76,42.76,0,0,0,5.87-.38,32,32,0,0,0,6.15-1.61,27.43,27.43,0,0,0-.81-3.83A26,26,0,0,0,414.93,324.79Z"
              transform="translate(-116.78 -257.4)"
              fill="#8cc540"
            />
            <path
              d="M448.46,304.54a14.22,14.22,0,0,0-5.14-3.7,19.82,19.82,0,0,0-14.43,0,14,14,0,0,0-5.07,3.7,15.82,15.82,0,0,0-3,5.57,22.81,22.81,0,0,0-1,6.91,22.25,22.25,0,0,0,1,6.83,15.86,15.86,0,0,0,3,5.5A13.51,13.51,0,0,0,428.9,333a17.89,17.89,0,0,0,7.19,1.32v0a18.4,18.4,0,0,0,7.23-1.32,13.83,13.83,0,0,0,5.14-3.67,15.13,15.13,0,0,0,3-5.5,22.59,22.59,0,0,0,1-6.83,23.34,23.34,0,0,0-1-6.89A15,15,0,0,0,448.46,304.54Zm-7.07,20.16a5.73,5.73,0,0,1-5.3,2.67,5.65,5.65,0,0,1-5.23-2.67q-1.61-2.67-1.6-7.7c0-3.36.53-5.92,1.6-7.7a6.53,6.53,0,0,1,10.53,0Q443,312,443,317T441.39,324.7Z"
              transform="translate(-116.78 -257.4)"
              fill="#8cc540"
            />
            <path
              d="M476.41,299.49a11.24,11.24,0,0,0-3.36.48,12.07,12.07,0,0,0-2.73,1.26,10.81,10.81,0,0,0-2.13,1.74,14.62,14.62,0,0,0-1.58,1.93c0-.31-.1-.67-.17-1.1s-.14-.87-.23-1.32-.18-.88-.29-1.29a3.41,3.41,0,0,0-.37-.93c-.62-.13-1.21-.23-1.77-.29a16.41,16.41,0,0,0-2-.1,19.9,19.9,0,0,0-2,.1,16.56,16.56,0,0,0-1.83.29h0v33.3a28.7,28.7,0,0,0,9.34,0V316.1a13.83,13.83,0,0,1,.59-4.38,6.79,6.79,0,0,1,1.55-2.61,4.86,4.86,0,0,1,2.14-1.26,8.92,8.92,0,0,1,2.3-.31,4,4,0,0,1,3.78,1.86,10.7,10.7,0,0,1,1.1,5.35v18.83a28.7,28.7,0,0,0,9.34,0V312.31q0-6.63-2.94-9.73C483.17,300.52,480.26,299.49,476.41,299.49Z"
              transform="translate(-116.78 -257.4)"
              fill="#8cc540"
            />
            <path
              d="M513.1,299.49a11.24,11.24,0,0,0-3.36.48,11.8,11.8,0,0,0-2.72,1.26,10.87,10.87,0,0,0-2.14,1.74,14.62,14.62,0,0,0-1.58,1.93l-.16-1.1q-.11-.65-.24-1.32c-.08-.46-.18-.88-.29-1.29a3.41,3.41,0,0,0-.37-.93,17.13,17.13,0,0,0-1.77-.29,18.57,18.57,0,0,0-2-.1,19.9,19.9,0,0,0-2,.1,16.37,16.37,0,0,0-1.84.29h0v33.3a28.7,28.7,0,0,0,9.34,0V316.1a13.28,13.28,0,0,1,.59-4.38,6.79,6.79,0,0,1,1.55-2.61,4.86,4.86,0,0,1,2.14-1.26,8.86,8.86,0,0,1,2.3-.31,4,4,0,0,1,3.78,1.86,10.7,10.7,0,0,1,1.1,5.35v18.83a28.7,28.7,0,0,0,9.34,0V312.31q0-6.63-2.94-9.73T513.1,299.49Z"
              transform="translate(-116.78 -257.4)"
              fill="#8cc540"
            />
            <path
              d="M557,304.06a13.63,13.63,0,0,0-4.7-3.35,15.42,15.42,0,0,0-6.32-1.23,17.12,17.12,0,0,0-7.13,1.39,14.79,14.79,0,0,0-5.13,3.77,16,16,0,0,0-3.13,5.6,22,22,0,0,0-1.05,6.89,22.34,22.34,0,0,0,1,6.89,13.79,13.79,0,0,0,8.68,9,22.87,22.87,0,0,0,8.12,1.29,32.83,32.83,0,0,0,11.58-1.93,15.37,15.37,0,0,0-.59-3.87,15.63,15.63,0,0,0-1.25-3.09,27.45,27.45,0,0,1-4.44,1.19,25.07,25.07,0,0,1-4.57.42,11.36,11.36,0,0,1-6.58-1.74,6.94,6.94,0,0,1-2.76-5.6h21.84a18,18,0,0,0,.23-1.9c.07-.8.1-1.6.1-2.42a19.45,19.45,0,0,0-1-6.28A14.18,14.18,0,0,0,557,304.06Zm-18.19,9.27a8.5,8.5,0,0,1,2-5.09,6.56,6.56,0,0,1,5-1.8,5.58,5.58,0,0,1,4.51,1.9,8,8,0,0,1,1.74,5Z"
              transform="translate(-116.78 -257.4)"
              fill="#8cc540"
            />
            <path
              d="M589.19,325.7h0c-.75.25-1.39.47-1.94.64a11.11,11.11,0,0,1-1.61.39,12.35,12.35,0,0,1-1.61.15c-.55,0-1.15,0-1.81,0a7.93,7.93,0,0,1-6.05-2.38c-1.49-1.59-2.24-4.12-2.24-7.61q0-4.82,2.07-7.42a7.38,7.38,0,0,1,6.15-2.61,23.89,23.89,0,0,1,3.38.22A22.75,22.75,0,0,1,589,308a14.54,14.54,0,0,0,1.25-3.51,16.09,16.09,0,0,0,.39-3.31c-.93-.34-1.76-.62-2.5-.84a21.17,21.17,0,0,0-2.23-.51,18.61,18.61,0,0,0-2.34-.26c-.8-.05-1.69-.07-2.67-.07a17.62,17.62,0,0,0-7.16,1.36,14.31,14.31,0,0,0-5.16,3.75,15.92,15.92,0,0,0-3.09,5.54,23.25,23.25,0,0,0,0,13.75,15.43,15.43,0,0,0,3.12,5.5,14.36,14.36,0,0,0,5.23,3.64,19.27,19.27,0,0,0,7.43,1.32,40.42,40.42,0,0,0,4.8-.29,20.88,20.88,0,0,0,4.93-1.32,13.75,13.75,0,0,0-.52-4A13.54,13.54,0,0,0,589.19,325.7Z"
              transform="translate(-116.78 -257.4)"
              fill="#8cc540"
            />
            <path
              d="M614.44,326.21l-1.67.28a11.47,11.47,0,0,1-1.94.17,8.27,8.27,0,0,1-2.17-.26,3.21,3.21,0,0,1-1.55-1,4.66,4.66,0,0,1-1-1.93,12.5,12.5,0,0,1-.33-3.22V307.2h8c.12-.62.2-1.24.26-1.86s.07-1.18.07-1.74,0-1.1-.07-1.61a17,17,0,0,0-.26-1.74h-8v-9.73h-1.51L592,305.93l.33,1.28h4.29v15.07c0,4.12,1.05,7.09,3.15,8.91s5.15,2.74,9.14,2.74a26.73,26.73,0,0,0,6.24-.71c0-.29.08-.61.1-.93s0-.71,0-1.19a15.42,15.42,0,0,0-.2-2.35A12.33,12.33,0,0,0,614.44,326.21Z"
              transform="translate(-116.78 -257.4)"
              fill="#8cc540"
            />
            <path
              d="M616,303.67a17.5,17.5,0,0,0,.1,1.77,14.86,14.86,0,0,0,.3,1.77h4.42v26.34a27.62,27.62,0,0,0,4.54.37,28.57,28.57,0,0,0,4.61-.37V300.26H616.36A15.06,15.06,0,0,0,616,303.67Z"
              transform="translate(-116.78 -257.4)"
              fill="#8cc540"
            />
            <path
              d="M619.37,294.66a20,20,0,0,0,2.44.26c.88,0,1.67.07,2.37.07s1.54,0,2.4-.07a19.56,19.56,0,0,0,2.4-.26,18.08,18.08,0,0,0,.26-2.2c0-.73.07-1.44.07-2.12s0-1.45-.07-2.16A19.88,19.88,0,0,0,629,286c-.75-.13-1.56-.22-2.44-.29s-1.72-.09-2.43-.09-1.48,0-2.33.09-1.67.16-2.41.29a26,26,0,0,0-.39,4.32,24,24,0,0,0,.39,4.31Z"
              transform="translate(-116.78 -257.4)"
              fill="#8cc540"
            />
            <path
              d="M664,304.56a14.22,14.22,0,0,0-5.14-3.7,19.82,19.82,0,0,0-14.43,0,13.85,13.85,0,0,0-5.06,3.7,15.68,15.68,0,0,0-3,5.57,22.69,22.69,0,0,0-1,6.89,22,22,0,0,0,1,6.83,15.7,15.7,0,0,0,3,5.5A13.47,13.47,0,0,0,644.4,333a17.94,17.94,0,0,0,7.2,1.32,18.26,18.26,0,0,0,7.23-1.32,13.83,13.83,0,0,0,5.14-3.67,15,15,0,0,0,3-5.5,22.54,22.54,0,0,0,1-6.83,23.34,23.34,0,0,0-1-6.89A15,15,0,0,0,664,304.56ZM656.9,324.7a5.73,5.73,0,0,1-5.3,2.67,5.65,5.65,0,0,1-5.23-2.67q-1.61-2.67-1.61-7.7c0-3.36.54-5.92,1.61-7.7a6.53,6.53,0,0,1,10.53,0q1.61,2.67,1.61,7.7T656.9,324.7Z"
              transform="translate(-116.78 -257.4)"
              fill="#8cc540"
            />
            <path
              d="M691.91,299.49a11.24,11.24,0,0,0-3.36.48,11.8,11.8,0,0,0-2.72,1.26,11.17,11.17,0,0,0-2.14,1.74,14.62,14.62,0,0,0-1.58,1.93c0-.31-.1-.67-.17-1.1s-.14-.87-.23-1.32-.18-.88-.29-1.29a3.41,3.41,0,0,0-.37-.93c-.62-.13-1.21-.23-1.77-.29a18.75,18.75,0,0,0-2-.1,19.9,19.9,0,0,0-2,.1,16.56,16.56,0,0,0-1.83.29h0v33.3a28.64,28.64,0,0,0,9.33,0V316.1a13.56,13.56,0,0,1,.6-4.38,6.67,6.67,0,0,1,1.55-2.61,4.82,4.82,0,0,1,2.13-1.26,8.92,8.92,0,0,1,2.3-.31,4,4,0,0,1,3.78,1.86,10.6,10.6,0,0,1,1.1,5.35v18.83a28.7,28.7,0,0,0,9.34,0V312.31q0-6.63-2.94-9.73T691.91,299.49Z"
              transform="translate(-116.78 -257.4)"
              fill="#8cc540"
            />
            <path
              d="M184.28,297.43c.35.3.68.62,1,.94a18.9,18.9,0,0,1,1.22,1.49l14.13-2.39a32,32,0,0,0-28.8-18.06h-.3a32.71,32.71,0,1,0,28.87,47.74l-14.22-2.4a19.37,19.37,0,1,1-1.9-27.33Z"
              transform="translate(-116.78 -257.4)"
              fill="#8cc540"
            />
            <path
              d="M182.06,305.85v-.07h-2.69a10.05,10.05,0,0,0-7.83-3.9,10.25,10.25,0,0,0-.38,20.49h.38a10.16,10.16,0,0,0,7.59-3.53h33.54a41.87,41.87,0,1,1-2.83-22.92l13-2.22h0a54.34,54.34,0,1,0,3.36,18.42,57,57,0,0,0-.35-6.27Z"
              transform="translate(-116.78 -257.4)"
              fill="#24282b"
            />
            <path
              d="M952.69,307.93l-6.2-.6c-3.48-.31-4.08-2-4.08-3.4,0-2,1.66-3.78,5.59-3.78,3.4,0,6.88.6,9.15,2.64l6-6.12c-3.78-3.55-8.92-4.61-15-4.61-8,0-15.19,4.38-15.19,12.54,0,7.26,4.39,10.36,11.49,11l6.2.6c3.1.3,4.15,1.66,4.15,3.63,0,2.95-3.55,4.08-6.95,4.08-3,0-7.25-.46-10.5-3.7l-6.43,6.42c5,5,10.58,5.67,16.78,5.67,9.29,0,16.7-4.16,16.7-12.85C964.4,312.84,960.47,308.69,952.69,307.93Z"
              transform="translate(-116.78 -257.4)"
              fill="#231f20"
            />
            <polygon
              points="830.91 74.94 830.91 74.94 830.91 74.94 830.91 74.94"
              fill="#231f20"
            />
            <path
              d="M985.18,292.06c-10.2,0-17.15,7.25-17.15,20.1,0,15.95,8.91,20.18,18.21,20.18,7.1,0,11-2.19,15-6.2l-6-5.82a10.87,10.87,0,0,1-8.91,3.71c-5.52,0-8.62-3.71-8.62-8.77h24.63v-4.38C1002.33,300.08,996.14,292.06,985.18,292.06Zm-7.48,16.48a10.88,10.88,0,0,1,.91-4.24,7.34,7.34,0,0,1,13.15,0,11.07,11.07,0,0,1,.91,4.24Z"
              transform="translate(-116.78 -257.4)"
              fill="#231f20"
            />
            <path
              d="M1024,292.06c-10.2,0-17.16,7.25-17.16,20.1,0,15.95,8.92,20.18,18.22,20.18,7.1,0,11-2.19,15-6.2l-6-5.82a10.89,10.89,0,0,1-8.92,3.71c-5.51,0-8.62-3.71-8.62-8.77h24.64v-4.38C1041.1,300.08,1034.9,292.06,1024,292.06Zm-7.49,16.48a11.07,11.07,0,0,1,.91-4.24,7.34,7.34,0,0,1,13.15,0,10.88,10.88,0,0,1,.91,4.24Z"
              transform="translate(-116.78 -257.4)"
              fill="#231f20"
            />
            <polygon
              points="951.45 50.99 965.5 35.12 953.64 35.12 940.56 51.21 940.56 20.68 930.74 20.68 930.74 74.49 940.56 74.49 940.56 62.78 944.73 58.09 954.39 74.49 966.56 74.49 951.45 50.99"
              fill="#231f20"
            />
            <path
              d="M861.15,258.47a54.46,54.46,0,1,0,54.47,54.46A54.46,54.46,0,0,0,861.15,258.47ZM818,325.86a.84.84,0,0,1-.85-.84.85.85,0,1,1,1.7,0A.84.84,0,0,1,818,325.86Zm0-11.43a.86.86,0,0,1-.85-.86.85.85,0,0,1,1.7,0A.86.86,0,0,1,818,314.43ZM818,303a.85.85,0,1,1,.85-.85A.85.85,0,0,1,818,303Zm5.87,23.31a1.28,1.28,0,1,1,1.27-1.27A1.27,1.27,0,0,1,823.87,326.29Zm0-11.44a1.28,1.28,0,1,1,1.27-1.28A1.28,1.28,0,0,1,823.87,314.85Zm0-11.44a1.28,1.28,0,1,1,1.27-1.28A1.28,1.28,0,0,1,823.87,303.41Zm6.87,23.31a1.71,1.71,0,1,1,1.7-1.7A1.71,1.71,0,0,1,830.74,326.72Zm0-11.45a1.7,1.7,0,1,1,1.7-1.7A1.71,1.71,0,0,1,830.74,315.27Zm0-11.44a1.7,1.7,0,1,1,1.7-1.7A1.71,1.71,0,0,1,830.74,303.83ZM838,327.14A2.13,2.13,0,1,1,840.1,325,2.12,2.12,0,0,1,838,327.14Zm0-11.44a2.13,2.13,0,1,1,2.13-2.13A2.13,2.13,0,0,1,838,315.7Zm0-11.44a2.13,2.13,0,1,1,2.13-2.13A2.13,2.13,0,0,1,838,304.26Zm8.47,23.31A2.55,2.55,0,1,1,849,325,2.55,2.55,0,0,1,846.44,327.57Zm0-11.44a2.56,2.56,0,1,1,2.55-2.56A2.56,2.56,0,0,1,846.44,316.13Zm0-11.45a2.56,2.56,0,1,1,2.55-2.55A2.55,2.55,0,0,1,846.44,304.68ZM855.3,328a3,3,0,1,1,3-3A3,3,0,0,1,855.3,328Zm0-11.44a3,3,0,1,1,3-3A3,3,0,0,1,855.3,316.55Zm0-11.44a3,3,0,1,1,3-3A3,3,0,0,1,855.3,305.11Zm10.54,46.2a3.4,3.4,0,1,1,3.41-3.41A3.41,3.41,0,0,1,865.84,351.31Zm0-11.44a3.41,3.41,0,1,1,3.41-3.41A3.41,3.41,0,0,1,865.84,339.87Zm0-11.45a3.41,3.41,0,1,1,3.41-3.4A3.4,3.4,0,0,1,865.84,328.42Zm0-11.44a3.41,3.41,0,1,1,3.41-3.41A3.41,3.41,0,0,1,865.84,317Zm0-11.45a3.4,3.4,0,1,1,3.41-3.4A3.4,3.4,0,0,1,865.84,305.53Zm0-11.44a3.41,3.41,0,1,1,3.41-3.41A3.41,3.41,0,0,1,865.84,294.09Zm0-11.45a3.4,3.4,0,1,1,3.41-3.4A3.4,3.4,0,0,1,865.84,282.64Zm10.94,57.58a3.76,3.76,0,1,1,3.76-3.76A3.75,3.75,0,0,1,876.78,340.22Zm0-11.45a3.76,3.76,0,1,1,3.76-3.75A3.75,3.75,0,0,1,876.78,328.77Zm0-11.44a3.76,3.76,0,1,1,3.76-3.76A3.75,3.75,0,0,1,876.78,317.33Zm0-11.45a3.75,3.75,0,1,1,3.76-3.75A3.75,3.75,0,0,1,876.78,305.88Zm0-11.44a3.76,3.76,0,1,1,3.76-3.76A3.75,3.75,0,0,1,876.78,294.44Zm11.74,34.82a4.22,4.22,0,1,1,4.21-4.21A4.21,4.21,0,0,1,888.52,329.26Zm0-11.44a4.22,4.22,0,1,1,4.21-4.21A4.21,4.21,0,0,1,888.52,317.82Zm0-11.44a4.22,4.22,0,1,1,4.21-4.21A4.21,4.21,0,0,1,888.52,306.38Zm16.58,7.3a4.62,4.62,0,1,1-4.62-4.61A4.62,4.62,0,0,1,905.1,313.68Z"
              transform="translate(-116.78 -257.4)"
              fill="#003f88"
            />
            <path
              d="M865.84,275.84a3.4,3.4,0,1,0,3.41,3.4A3.4,3.4,0,0,0,865.84,275.84Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M876.78,286.93a3.76,3.76,0,1,0,3.76,3.75A3.75,3.75,0,0,0,876.78,286.93Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M865.84,287.28a3.41,3.41,0,1,0,3.41,3.4A3.4,3.4,0,0,0,865.84,287.28Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M888.52,298a4.22,4.22,0,1,0,4.21,4.22A4.21,4.21,0,0,0,888.52,298Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M876.78,298.38a3.75,3.75,0,1,0,3.76,3.75A3.74,3.74,0,0,0,876.78,298.38Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M865.84,298.73a3.4,3.4,0,1,0,3.41,3.4A3.4,3.4,0,0,0,865.84,298.73Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M855.3,299.15a3,3,0,1,0,3,3A3,3,0,0,0,855.3,299.15Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M846.44,299.57a2.56,2.56,0,1,0,2.55,2.56A2.56,2.56,0,0,0,846.44,299.57Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M838,300a2.13,2.13,0,1,0,2.13,2.13A2.13,2.13,0,0,0,838,300Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M830.74,300.43a1.7,1.7,0,1,0,1.7,1.7A1.71,1.71,0,0,0,830.74,300.43Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M823.87,300.85a1.28,1.28,0,1,0,1.27,1.28A1.28,1.28,0,0,0,823.87,300.85Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M818,301.28a.85.85,0,1,0,.85.85A.85.85,0,0,0,818,301.28Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M888.52,309.39a4.22,4.22,0,1,0,4.21,4.22A4.21,4.21,0,0,0,888.52,309.39Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M876.78,309.82a3.76,3.76,0,1,0,3.76,3.75A3.75,3.75,0,0,0,876.78,309.82Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M865.84,310.17a3.41,3.41,0,1,0,3.41,3.4A3.4,3.4,0,0,0,865.84,310.17Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M855.3,310.59a3,3,0,1,0,3,3A3,3,0,0,0,855.3,310.59Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M846.44,311a2.56,2.56,0,1,0,2.55,2.55A2.55,2.55,0,0,0,846.44,311Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M838,311.45a2.13,2.13,0,1,0,2.13,2.12A2.12,2.12,0,0,0,838,311.45Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M830.74,311.87a1.7,1.7,0,1,0,1.7,1.7A1.71,1.71,0,0,0,830.74,311.87Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M823.87,312.3a1.28,1.28,0,1,0,1.27,1.27A1.27,1.27,0,0,0,823.87,312.3Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M818,312.72a.85.85,0,0,0-.85.85.85.85,0,1,0,1.7,0A.85.85,0,0,0,818,312.72Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M895.86,313.68a4.62,4.62,0,1,0,4.62-4.61A4.63,4.63,0,0,0,895.86,313.68Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M888.52,320.83a4.22,4.22,0,1,0,4.21,4.22A4.21,4.21,0,0,0,888.52,320.83Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M876.78,321.26a3.76,3.76,0,1,0,3.76,3.76A3.75,3.75,0,0,0,876.78,321.26Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M865.84,321.61a3.41,3.41,0,1,0,3.41,3.41A3.41,3.41,0,0,0,865.84,321.61Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M855.3,322a3,3,0,1,0,3,3A3,3,0,0,0,855.3,322Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M846.44,322.47A2.55,2.55,0,1,0,849,325,2.54,2.54,0,0,0,846.44,322.47Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M838,322.89A2.13,2.13,0,1,0,840.1,325,2.13,2.13,0,0,0,838,322.89Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M830.74,323.31a1.71,1.71,0,1,0,0,3.41,1.71,1.71,0,0,0,0-3.41Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M823.87,323.74a1.28,1.28,0,1,0,1.27,1.28A1.28,1.28,0,0,0,823.87,323.74Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M818,324.16a.86.86,0,0,0-.85.86.85.85,0,0,0,1.7,0A.86.86,0,0,0,818,324.16Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M876.78,332.71a3.76,3.76,0,1,0,3.76,3.75A3.75,3.75,0,0,0,876.78,332.71Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M865.84,333.05a3.41,3.41,0,1,0,3.41,3.41A3.41,3.41,0,0,0,865.84,333.05Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M865.84,344.51a3.4,3.4,0,1,0,3.41,3.39A3.4,3.4,0,0,0,865.84,344.51Z"
              transform="translate(-116.78 -257.4)"
              fill="#fff"
            />
            <path
              d="M754.51,370.19h.82V257.4h-.82Z"
              transform="translate(-116.78 -257.4)"
              fill="#231f20"
            />
          </svg>
        </Box>
        <Box background="brand" paddingY="large">
          <PageBlock width="medium">
            <Stack space="medium">
              <Heading level="3">
                Find Graduate Jobs and Internships in Australia
              </Heading>
              <Text>
                420 Graduate and Internship Programs available right now
              </Text>
              <Box background="surface" borderRadius="large" padding="gutter">
                <Columns
                  space={{ mobile: 'medium', tablet: 'xxsmall' }}
                  collapseBelow="tablet"
                  alignY="bottom"
                >
                  <Column>
                    <Autosuggest
                      label="Keyword"
                      icon={<IconSearch />}
                      placeholder="Start searching..."
                      suggestions={filterSuggestions([
                        {
                          text: 'Graduate Jobs',
                        },
                        {
                          text: 'Internships',
                        },
                        {
                          text: 'Part Time Student Jobs',
                        },
                        {
                          text: 'Clerkships',
                        },
                        {
                          text: 'Scholarships',
                        },
                        {
                          text: 'Cadetships',
                        },
                        {
                          text: 'Learnership',
                        },
                        {
                          text: 'Events',
                        },
                      ])}
                    />
                  </Column>
                  <Column>
                    <TextField
                      label="Discipline"
                      icon={<IconCompany />}
                      placeholder="Any Discipline"
                    />
                  </Column>
                  <Column>
                    <Autosuggest
                      label="Location"
                      icon={<IconLocation />}
                      placeholder="All Locations"
                      suggestions={filterSuggestions([
                        {
                          text: 'Australia',
                        },
                        {
                          label: 'State',
                          suggestions: [
                            {
                              text: 'Australian Captial Territory',
                            },
                            {
                              text: 'New South Wales',
                            },
                            {
                              text: 'Northern Territory',
                            },
                            {
                              text: 'Queensland',
                            },
                            {
                              text: 'South Australia',
                            },
                            {
                              text: 'Tasmania',
                            },
                            {
                              text: 'Victoria',
                            },
                            {
                              text: 'Western Australia',
                            },
                          ],
                        },
                      ])}
                    />
                  </Column>
                  <Column width="content">
                    <Button tone="brandAccent">Search</Button>
                  </Column>
                </Columns>
              </Box>
            </Stack>
          </PageBlock>
        </Box>
        <Box
          background="surface"
          paddingY={{ mobile: 'medium', tablet: 'xsmall' }}
        >
          <PageBlock width="medium">
            <Inline space="small" alignY="center" collapseBelow="tablet">
              <Text size="small" weight="strong">
                Recent searches:
              </Text>
              <Box
                padding="small"
                boxShadow="borderNeutralLight"
                borderRadius="standard"
              >
                <Columns space="small">
                  <Column>
                    <Stack space="small">
                      <Text size="small" weight="medium">
                        <TextLink href="#">Internships</TextLink>
                      </Text>
                      <Text size="small">All Discipilines, All Locations</Text>
                    </Stack>
                  </Column>
                  <Column width="content">
                    <Text tone="secondary">
                      <IconSearch />
                    </Text>
                  </Column>
                </Columns>
              </Box>
            </Inline>
          </PageBlock>
        </Box>
        <Box paddingY="medium">
          <PageBlock width="medium">
            <Stack space="xlarge">
              <Tiles
                space={{ mobile: 'xsmall', tablet: 'medium' }}
                columns={[1, 2, 4]}
              >
                {[
                  {
                    logo: 'https://au.cdn.gradconnection.com/media/uploads/SEEK-pink.jpg',
                    name: 'SEEK',
                    description: `The SEEK Strategy & Operations Graduate Program is one-of-a-kind. It combines the best of s...`,
                  },
                  {
                    logo: 'https://au.cdn.gradconnection.com/media/uploads/Optiver_Logo_GC.jpg',
                    name: 'Optiver',
                    description: `Optiver is a high-frequency trading firm that improves the market by solving the world’s mo...`,
                  },
                  {
                    logo: 'https://au.cdn.gradconnection.com/media/uploads/PwC.jpg',
                    name: 'PwC',
                    description: `Want to play a part in helping Australian businesses, not-for-profits and governments crea...`,
                  },
                  {
                    logo: 'https://media.cdn.gradconnection.com/uploads/2d857bad-8fb3-4017-a035-de6eb953b625-social.jpg',
                    name: 'Follow',
                    description: `Join our community on Facebook. Follow us to stay up to date with the latest career tips, j...`,
                  },
                ].map((item) => (
                  <Card key={item.name}>
                    <Stack space="gutter">
                      <Bleed top="small" horizontal="small">
                        <Box
                          borderRadius="standard"
                          style={{
                            height: 120,
                            background: `url(${item.logo}) no-repeat center center /cover`,
                          }}
                        />
                      </Bleed>
                      <Text weight="strong">{item.name}</Text>
                      <Text tone="secondary" maxLines={3}>
                        {item.description}
                      </Text>
                      <Text align="right">
                        <TextLink href="#">Find out more...</TextLink>
                      </Text>
                    </Stack>
                  </Card>
                ))}
              </Tiles>
              <Columns space="gutter" collapseBelow="tablet">
                <Column>
                  <Stack space="medium">
                    <Stack space="small">
                      {[
                        {
                          name: 'KPMG',
                          logo: 'https://media.cdn.gradconnection.com/uploads/a4dbb66d-e17b-476c-b471-90f380307753-KPMG.JPG',
                          title: 'KPMG Women in Audit Event',
                          description:
                            'Come along to hear from our some of our inspiring women in KPMG Audit and find out more about the exciting grad opportunities on offer.',
                          type: 'Event',
                          location: 'Canberra',
                          additionalLocations: '7 others',
                          startDate: '9 March 2021',
                          closingSoon: 'IN 2 DAYS',
                          standOut: true,
                          action: 'Sign up',
                          degrees: ['Accounting', ...new Array(3)],
                        },
                        {
                          name: 'KPMG',
                          logo: 'https://media.cdn.gradconnection.com/uploads/a4dbb66d-e17b-476c-b471-90f380307753-KPMG.JPG',
                          title: "KPMG's Women Empowered in STEM",
                          description:
                            "Join KPMG's Women Empowered in STEM to discover a career you never imagined!",
                          type: 'Event',
                          location: 'Canberra',
                          additionalLocations: '14 others',
                          startDate: 'March 2021 (approx)',
                          closingSoon: 'IN 3 DAYS',
                          standOut: false,
                          action: 'Sign up',
                          degrees: ['Actuary', ...new Array(24)],
                        },
                        {
                          name: 'Mondelez International',
                          logo: 'https://media.cdn.gradconnection.com/uploads/7a570e32-1e49-402f-98cb-ba2eebf0f2f4-mondelez-logo.jpg',
                          title: 'Merchandiser – Western Suburbs',
                          description:
                            'Looking for a creative and passionate individual to join our successful sales team in the Western Suburbs!',
                          type: 'Part Time Student Jobs',
                          location: 'Melbourne',
                          additionalLocations: '1 other location',
                          startDate: '9 March 2021',
                          closingSoon: 'IN 9 HOURS',
                          standOut: true,
                          action: 'Apply',
                          degrees: ['Business and commerce', ...new Array(3)],
                        },
                        {
                          name: 'Mondelez International',
                          logo: 'https://media.cdn.gradconnection.com/uploads/7a570e32-1e49-402f-98cb-ba2eebf0f2f4-mondelez-logo.jpg',
                          title: 'Merchandiser – Western Suburbs',
                          description:
                            "Join KPMG's Women Empowered in STEM to discover a career you never imagined!",
                          type: 'Event',
                          location: 'Canberra',
                          additionalLocations: '14 others',
                          startDate: 'March 2021 (approx)',
                          closingSoon: 'IN A DAY',
                          standOut: false,
                          action: 'Apply',
                          degrees: ['Business and commerce', ...new Array(24)],
                        },
                        {
                          name: 'NAB',
                          logo: 'https://media.cdn.gradconnection.com/uploads/b51966ef-ff48-4672-b9b9-4d6e72cc1e13-nab-new-logo.png',
                          title: 'NAB Customer Operations Associate',
                          description:
                            'The Customer Operations Associate is not your typical banker role. This is a new role in a new team aligned to building multi-skilled next generation of bankers. As an Associate, you’ll complete numerous placements across NAB aligned to supporting our customers and bankers.',
                          type: 'Graduate Jobs',
                          location: 'Melbourne',
                          additionalLocations: '',
                          startDate: '',
                          closingSoon: 'IN 2 DAYS',
                          standOut: true,
                          action: 'Apply',
                          degrees: ['Accounting', ...new Array(75)],
                        },
                        {
                          name: 'NAB',
                          logo: 'https://media.cdn.gradconnection.com/uploads/b51966ef-ff48-4672-b9b9-4d6e72cc1e13-nab-new-logo.png',
                          title: 'NAB Customer Operations Associate',
                          description:
                            "Join KPMG's Women Empowered in STEM to discover a career you never imagined!",
                          type: 'Event',
                          location: 'Melbourne',
                          additionalLocations: '',
                          startDate: 'March 2021 (approx)',
                          closingSoon: 'IN 2 DAYS',
                          standOut: false,
                          action: 'Apply',
                          degrees: ['Accounting', ...new Array(75)],
                        },
                      ].map((company) => (
                        <Card key={company.name}>
                          <Stack space="large">
                            <Stack space="medium">
                              <Heading level="4">
                                <TextLink href="#">{company.title}</TextLink>
                              </Heading>
                              <Columns space="small" alignY="center">
                                <Column width="content">
                                  <Text>{company.name}</Text>
                                </Column>
                                {company.closingSoon ? (
                                  <Column>
                                    <Stack space="small">
                                      <Badge tone="critical" bleedY>
                                        {`CLOSING ${company.closingSoon}`}
                                      </Badge>
                                    </Stack>
                                  </Column>
                                ) : null}
                              </Columns>
                            </Stack>
                            <Stack space="small">
                              <Text size="small" weight="medium">
                                {company.type}
                                <Box component="span" paddingX="xxsmall">
                                  ●
                                </Box>
                                {company.location}
                                {company.additionalLocations ? (
                                  <>
                                    {' '}
                                    <TextLink href="#">
                                      and {company.additionalLocations}
                                    </TextLink>
                                  </>
                                ) : null}
                              </Text>
                              <Text size="small" weight="medium">
                                {company.degrees[0]}{' '}
                                <TextLink href="#">
                                  and {company.degrees.length} others
                                </TextLink>
                              </Text>
                            </Stack>
                            <Text size="small" tone="secondary">
                              {company.description}
                            </Text>
                            <Columns space="small" collapseBelow="tablet">
                              <Column>
                                <Inline space="none">
                                  <Columns space="xsmall">
                                    <Column width="content">
                                      <Button
                                        tone="brandAccent"
                                        icon={<IconNewWindow />}
                                      >
                                        {company.action}
                                      </Button>
                                    </Column>
                                    <Column>
                                      <Button
                                        tone="brandAccent"
                                        variant="ghost"
                                        icon={<IconBookmark />}
                                      >
                                        Save
                                      </Button>
                                    </Column>
                                  </Columns>
                                </Inline>
                              </Column>
                              <Column width="content">
                                <Bleed vertical="xxsmall">
                                  <Box
                                    style={{
                                      height: 60,
                                      width: 80,
                                      background: `url(${company.logo}) no-repeat center center /60%`,
                                    }}
                                  />
                                </Bleed>
                              </Column>
                            </Columns>
                          </Stack>
                        </Card>
                      ))}
                    </Stack>
                    <Inline space="none" align="center">
                      <Button variant="ghost" tone="brandAccent">
                        View all opportunities <IconChevron direction="right" />
                      </Button>
                    </Inline>
                  </Stack>
                </Column>
                <Hidden below="desktop">
                  <Column width="content">
                    <Box
                      background="surface"
                      padding="gutter"
                      borderRadius="large"
                      boxShadow="borderNeutralLight"
                      style={{
                        width: '250px',
                      }}
                    >
                      <Stack space="medium">
                        <Heading level="4" align="center">
                          Too many applications, too little time?
                        </Heading>
                        <Text align="center">
                          Simplify things with our handy template for tracking
                          jobs
                        </Text>
                        <Button
                          tone="brandAccent"
                          icon={<IconDownload />}
                          size="small"
                        >
                          Download Template
                        </Button>
                        <Bleed bottom="small" horizontal="small">
                          <Box
                            component="img"
                            src="https://au.cdn.gradconnection.com/media/uploads/withbackground2.png"
                            display="block"
                            borderRadius="standard"
                            style={{
                              width: '100%',
                            }}
                          />
                        </Bleed>
                      </Stack>
                    </Box>
                  </Column>
                </Hidden>
              </Columns>
            </Stack>
          </PageBlock>
        </Box>
        <Box background="surface" padding="medium">
          <ContentBlock>
            <Columns
              space={['large', 'gutter']}
              alignY="center"
              collapseBelow="tablet"
            >
              <Column>
                <Inline space="large">
                  <Text>
                    <TextLink href="#">Graduate Jobs</TextLink>
                  </Text>
                  <Text>
                    <TextLink href="#">Internships</TextLink>
                  </Text>
                  <Text>
                    <TextLink href="#">Calendar</TextLink>
                  </Text>
                  <Text>
                    <TextLink href="#">Universities</TextLink>
                  </Text>
                  <Text>
                    <TextLink href="#">About Us</TextLink>
                  </Text>
                </Inline>
              </Column>
              <Column width="content">
                <Inline space="small">
                  <IconSocialFacebook tone="secondary" />
                  <IconSocialTwitter tone="secondary" />
                  <IconSocialLinkedIn tone="secondary" />
                  <IconSocialInstagram tone="secondary" />
                </Inline>
              </Column>
            </Columns>
          </ContentBlock>
        </Box>
      </>,
    ),
  },
];
