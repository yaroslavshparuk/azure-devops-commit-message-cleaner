# Azure DevOps PR Title Cleaner

A browser extension that automatically removes the "Merged" word from pull request titles in Azure DevOps auto-complete merge dialog.

## Why This Extension?

When completing pull requests in Azure DevOps, the system automatically generates commit messages with the format "Merged PR XXXXX: [Original Title]". However, many organizations have commit message policies that require clean, concise titles without the "Merged" prefix.

This extension automatically detects when you open the merge dialog and removes the "Merged" word from the commit message title, keeping the "PR XXXXX:" part, helping you comply with your organization's commit message policies.

## Features

- 🚀 **Automatic Detection**: Automatically detects Azure DevOps merge dialogs
- ☑️ **Auto-Checkbox**: Automatically clicks "Customize merge commit message" checkbox when found
- ✂️ **Smart Cleaning**: Removes only the "Merged" word, preserving the "PR XXXXX:" part and your original title
- 🔄 **Real-time Processing**: Works as soon as the merge dialog opens
- 🌐 **Multi-tenant Support**: Works with dev.azure.com, visualstudio.com, and custom TFS instances
- 📝 **Console Logging**: Provides feedback in browser console for debugging

## Installation

### From Browser Extension Store
*Coming soon - will be available on Chrome Web Store and Firefox Add-ons*

### Manual Installation (Developer Mode)

#### Chrome
1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension folder
5. The extension will be installed and active

#### Firefox
1. Download or clone this repository
2. Open Firefox and go to `about:debugging`
3. Click "This Firefox" in the sidebar
4. Click "Load Temporary Add-on"
5. Navigate to the extension folder and select `manifest.json`

#### Edge
1. Download or clone this repository
2. Open Edge and go to `edge://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked" and select the extension folder

## How It Works

The extension uses a content script that:

1. **Monitors the DOM** for Azure DevOps merge dialogs
2. **Automatically clicks** the "Customize merge commit message" checkbox if it's not already checked
3. **Detects title inputs** with the "Merged" word at the beginning
4. **Automatically cleans** the title by removing only the "Merged" word
5. **Preserves the "PR XXXXX:" part** and the original title that follows
6. **Triggers proper events** to ensure the UI updates correctly

## Example

**Before:**
```
Merged PR 23682: IT-1111: Fix bug in Users module
```

**After:**
```
PR 23682: IT-1111: Fix bug in Users module
```

## Privacy

This extension:
- ✅ **Only works on Azure DevOps domain**
- ✅ **Does not collect any personal data**
- ✅ **Does not send data to external servers**
- ✅ **Does not require any special permissions**
- ✅ **Works entirely within your browser**

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details.

## Support

If you encounter any issues or have feature requests, please create an issue in this repository.