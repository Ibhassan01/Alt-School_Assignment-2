const filterIcon = document.querySelector('.photography_header img');
const filterSection = document.querySelector('.filter_range');
const clearButton = document.querySelector('.clear');
const saveButton = document.querySelector('.save');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const filterLabels = document.querySelectorAll('ul li span');
const closeButton = document.getElementById('close')

//This has something to do with overlay creation
const overlay = document.createElement('div');
overlay.className = 'filter_overlay';
document.body.appendChild(overlay);

// Hide filter section initially
filterSection.style.display = 'none';

// Function to show filter
function showFilter() {
    filterSection.style.display = 'block';
    overlay.classList.add('show');

    setTimeout(() => {
        filterSection.classList.add('show');
    }, 10);
}

// Function to hide filter
function hideFilter() {
    filterSection.classList.remove('show');
    overlay.classList.remove('show');

    setTimeout(() => {
        filterSection.style.display = 'none';
    }, 400);
}

// Toggle filter section visibility when filter icon is clicked
filterIcon.addEventListener('click', function() {
    if (filterSection.classList.contains('show')) {
        hideFilter();
    } else {
        showFilter();
    }
});

// Close when overlay is clicked
overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
        hideFilter();
    }
});

// Close when close button is clicked
closeButton.addEventListener('click', function() {
    hideFilter();
});

// Add click event to filter labels to toggle their checkboxes
filterLabels.forEach((label, index) => {
    label.addEventListener('click', function() {
        // Find the corresponding checkbox (it's the previous sibling)
        const checkbox = this.previousElementSibling;
        if (checkbox && checkbox.type === 'checkbox') {
            checkbox.checked = !checkbox.checked;
        }
    });
});

// Add click event to checkboxes themselves (for direct clicking)
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', function(e) {
    
    });
});

// Clear all checkboxes when clear button is clicked
clearButton.addEventListener('click', function() {
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
});

// Save selected filters when save button is clicked
saveButton.addEventListener('click', function() {
    const selectedFilters = [];
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const label = checkbox.nextElementSibling;
            if (label) {
                selectedFilters.push(label.textContent.trim());
            }
        }
    });
    
    localStorage.setItem('selectedFilters', JSON.stringify(selectedFilters));
    
    // Hide the filter after saving
    hideFilter();
});