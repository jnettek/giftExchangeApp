export const clerkAppearance = {
  variables: {
    colorPrimary: '#F4A79D',           // coral-primary
    colorBackground: '#FFFFFF',
    colorInputBackground: '#FFFFFF',
    colorInputText: '#1A1A1A',
    colorText: '#1A1A1A',
    colorTextSecondary: '#666666',
    colorDanger: '#DC2626',
    borderRadius: '0.75rem',
    fontFamily: 'inherit',
  },
  elements: {
    card: 'shadow-lg border-2 border-gray-100 bg-white rounded-xl',
    headerTitle: 'text-2xl font-bold text-gray-900',
    headerSubtitle: 'text-gray-600 text-sm mt-1',
    socialButtonsBlockButton:
      'border-2 border-gray-200 hover:border-[#F4A79D] hover:bg-[#FFF4E6] transition-all duration-200 rounded-xl',
    socialButtonsBlockButtonText: 'font-medium text-gray-700',
    formButtonPrimary:
      'bg-[#F4A79D] hover:bg-[#e89689] active:bg-[#d98578] text-gray-900 font-semibold shadow-sm hover:shadow-md transition-all duration-200 rounded-xl',
    formFieldLabel: 'text-gray-700 font-medium text-sm',
    formFieldInput:
      'border-2 border-gray-200 focus:border-[#F4A79D] focus:ring-2 focus:ring-[#F4A79D]/20 rounded-xl transition-all duration-200',
    formFieldInputShowPasswordButton: 'text-gray-500 hover:text-gray-700',
    footerActionLink:
      'text-[#F4A79D] hover:text-[#e89689] font-medium transition-colors duration-200',
    footerActionText: 'text-gray-600 text-sm',
    dividerLine: 'bg-gray-200',
    dividerText: 'text-gray-500 text-sm',
    formFieldSuccessText: 'text-green-600',
    formFieldErrorText: 'text-red-600',
    identityPreviewText: 'text-gray-700',
    identityPreviewEditButton: 'text-[#F4A79D] hover:text-[#e89689]',
  },
};
