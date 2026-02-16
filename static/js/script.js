// Confirm delete action
function confirmDelete(event) {
    if (!confirm("Are you sure you want to delete this Todo item?")) {
        event.preventDefault();
    }
}

// Add event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Attach confirmDelete to all delete buttons
    const deleteButtons = document.querySelectorAll('a[href^="/delete/"]');
    deleteButtons.forEach(button => {
        button.addEventListener('click', confirmDelete);
    });

    // Simple animation for alerts
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        setTimeout(() => {
            alert.style.transition = "opacity 0.5s ease";
            alert.style.opacity = "0";
            setTimeout(() => alert.remove(), 500);
        }, 3000); // Auto-dismiss after 3 seconds
    });
});
