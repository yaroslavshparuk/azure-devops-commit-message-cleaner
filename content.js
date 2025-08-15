// Azure DevOps PR Title Cleaner
// Removes "Merged" from PR titles in the auto-complete dialog

function cleanMergedFromTitle(input) {
  if (!input || !input.value) return;
  
  const oldValue = input.value;
  const newValue = oldValue.replace(/^Merged\s+/i, '').trim();
  
  if (oldValue !== newValue) {
    input.value = newValue;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
    input.setSelectionRange(0, 0);
    input.blur();
  }
}

function findCustomizeCheckbox() {
  const labels = document.querySelectorAll('.bolt-checkbox-label');
  for (const label of labels) {
    if (label.textContent.includes('Customize merge commit message')) {
      const checkbox = label.closest('[role="checkbox"]') || label.parentElement.querySelector('[role="checkbox"]');
      if (checkbox) {
        return checkbox;
      }
    }
  }
  
  return null;
}

function clickCustomizeCheckbox() {
  const checkbox = findCustomizeCheckbox();
  if (checkbox) {
    const isChecked = checkbox.getAttribute('aria-checked') === 'true';
    if (!isChecked) {
      checkbox.click();
    }
  }
}

function findTitleInput() {
  const titleInputSelectors = [
    'input[aria-label="Title"]',
    'input[placeholder="Title"]',
    'input#__bolt-textfield-input-8',
    '.repos-indented-text-field input[type="text"]',
    '.bolt-textfield-input[placeholder="Title"]'
  ];
  
  for (const selector of titleInputSelectors) {
    const input = document.querySelector(selector);
    if (input && input.value && input.value.match(/^Merged\s+/i)) {
      return input;
    }
  }
  
  return null;
}

function processMergeDialog() {
  clickCustomizeCheckbox();
  setTimeout(() => {
    const titleInput = findTitleInput();
    if (titleInput) {
      cleanMergedFromTitle(titleInput);
    } 
  }, 0);
}

function observeForMergeDialog() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.querySelector && (
            node.querySelector('input[aria-label="Title"]') ||
            node.querySelector('.repos-indented-text-field') ||
            node.textContent.includes('Customize merge commit message') ||
            node.textContent.includes('Merge type')
          )) {
            processMergeDialog();
          }
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: false
  });
  
  processMergeDialog();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize);
} else {
  observeForMergeDialog();
}
