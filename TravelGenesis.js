function logout() {
    alert("Logging out...");
}

function deleteAccount() {
    let confirmDelete = confirm("Are you sure you want to delete your account? This action cannot be undone!");

    if (confirmDelete) {
        alert("Account deleted successfully.");
    }
}
