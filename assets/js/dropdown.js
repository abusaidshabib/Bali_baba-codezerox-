
        document.addEventListener("DOMContentLoaded", function() {
            const aboutDropdown = document.getElementById('aboutDropdown');
            const dropdownMenu = aboutDropdown.querySelector('ul');
    
            aboutDropdown.addEventListener('click', function(e) {
                e.stopPropagation();
                dropdownMenu.classList.toggle('hidden');
            });
    
            
            document.addEventListener('click', function(e) {
                if (!aboutDropdown.contains(e.target)) {
                    dropdownMenu.classList.add('hidden');
                }
            });
        });