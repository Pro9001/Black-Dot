// Function to show image and calculate reward after 4 seconds
function showImageAndReward() {
    // Show the image and hide the click area
    document.getElementById('image-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';

    // Simulate fetching account age (replace with actual API call)
    setTimeout(function() {
        // Replace with actual Telegram API integration
        const accountAgeInMilliseconds = fetchAccountAge(); // Function to fetch account age

        // Calculate coins based on account age
        const coins = calculateCoins(accountAgeInMilliseconds);

        // Display result
        document.getElementById('result').textContent = `Congratulations! You earned ${coins} coins.`;

        // Show referral link after reward calculation
        showReferralLink();
    }, 4000); // Wait for 4 seconds
}

// Function to fetch account age (replace with actual API call)
function fetchAccountAge() {
    // Simulated account age (replace with actual API call)
    const accountCreationDate = new Date('2020-01-01'); // Replace with actual date from Telegram API
    const currentDate = new Date();
    const accountAgeInMilliseconds = currentDate - accountCreationDate;
    return accountAgeInMilliseconds;
}

// Function to calculate coins based on account age
function calculateCoins(accountAgeInMilliseconds) {
    // Example calculation: 1 coin per month of account age
    const accountAgeInMonths = accountAgeInMilliseconds / (1000 * 60 * 60 * 24 * 30);
    return Math.floor(accountAgeInMonths);
}

// Function to show referral link
function showReferralLink() {
    document.getElementById('referral-container').style.display = 'block';
    const referralLink = generateReferralLink(); // Replace with actual referral link generation logic
    document.getElementById('referral-link').value = referralLink;
}

// Function to generate referral link (example)
function generateReferralLink() {
    // Replace with actual referral link generation logic (e.g., include user ID)
    const userId = 12345; // Example user ID (replace with actual user ID)
    return `https://example.com/referral?user=${userId}`;
}

// Function to copy referral link to clipboard
function copyReferralLink() {
    const referralLink = document.getElementById('referral-link');
    referralLink.select();
    document.execCommand('copy');
    alert('Referral link copied to clipboard!');
}
