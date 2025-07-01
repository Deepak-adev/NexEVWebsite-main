'use server';

export async function subscribeToNewsletter(formData) {
  const email = formData.get('email');
  
  // Here you would typically:
  // 1. Validate the email
  // 2. Add to your newsletter service
  // 3. Store in database
  // For now, we'll just log it
  console.log('Newsletter signup:', email);

  return { success: true, message: 'Successfully subscribed!' };
} 