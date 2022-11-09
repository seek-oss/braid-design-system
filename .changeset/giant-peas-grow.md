---
'braid-design-system': patch
---

---
updated:
  - Accordion
  - AccordionItem
  - Actions
  - Alert
  - Autosuggest
  - Badge
  - Box
  - Button
  - ButtonIcon
  - ButtonLink
  - Card
  - Checkbox
  - Columns
  - ContentBlock
  - Dialog
  - Disclosure
  - Drawer
  - Dropdown
  - FieldLabel
  - FieldMessage
  - Heading
  - Hidden
  - HiddenVisually
  - IconAdd
  - IconArrow
  - IconBookmark
  - IconCaution
  - IconChevron
  - IconClear
  - IconCompany
  - IconCompose
  - IconCopy
  - IconCreditCard
  - IconCritical
  - IconDate
  - IconDelete
  - IconDesktop
  - IconDocument
  - IconDocumentBroken
  - IconDownload
  - IconEdit
  - IconEducation
  - IconFilter
  - IconFlag
  - IconGrid
  - IconHeart
  - IconHelp
  - IconHistory
  - IconHome
  - IconImage
  - IconInfo
  - IconInvoice
  - IconLanguage
  - IconLink
  - IconLinkBroken
  - IconList
  - IconLocation
  - IconMail
  - IconMinus
  - IconMobile
  - IconMoney
  - IconNewWindow
  - IconNote
  - IconNotification
  - IconOverflow
  - IconPeople
  - IconPersonAdd
  - IconPersonVerified
  - IconPhone
  - IconPlatformAndroid
  - IconPlatformApple
  - IconPositive
  - IconPrint
  - IconProfile
  - IconPromote
  - IconRecommended
  - IconRefresh
  - IconResume
  - IconSearch
  - IconSecurity
  - IconSend
  - IconSent
  - IconSettings
  - IconShare
  - IconSocialFacebook
  - IconSocialGitHub
  - IconSocialInstagram
  - IconSocialLinkedIn
  - IconSocialMedium
  - IconSocialTwitter
  - IconSocialYouTube
  - IconStar
  - IconStatistics
  - IconSubCategory
  - IconTag
  - IconThumb
  - IconTick
  - IconTime
  - IconTip
  - IconUpload
  - IconVideo
  - IconVisibility
  - IconWorkExperience
  - IconZoomIn
  - IconZoomOut
  - Inline
  - List
  - Loader
  - MenuRenderer
  - MenuItem
  - MenuItemCheckbox
  - MenuItemLink
  - OverflowMenu
  - MonthPicker
  - Notice
  - Pagination
  - PasswordField
  - Radio
  - RadioGroup
  - RadioItem
  - Rating
  - Secondary
  - Stack
  - Stepper
  - Strong
  - Tab
  - Tabs
  - TabPanel
  - Tag
  - Text
  - Textarea
  - TextDropdown
  - TextField
  - TextLink
  - TextLinkButton
  - Tiles
  - Toggle
---

Support data attribute boolean values

The `data` attribute map now supports boolean values. This provides an improvement for the developer experience, no longer having to convert values to strings explicitly.

**EXAMPLE USAGE:**
```tsx
<Component
  data={{
    'custom-attribute': true,
  }}
/>
// => <div data-custom-attribute="true" />
```
