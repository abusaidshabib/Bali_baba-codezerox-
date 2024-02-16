document.addEventListener("DOMContentLoaded", function() {
    const blogDropdown = document.getElementById('blogDropdown');
    const dropdownMenu = blogDropdown.querySelector('ul');

    blogDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownMenu.classList.toggle('hidden');
    });

    
    document.addEventListener('click', function(e) {
        if (!blogDropdown.contains(e.target)) {
            dropdownMenu.classList.add('hidden');
        }
    });
});