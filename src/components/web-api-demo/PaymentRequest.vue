<template>
  <div>
    <button :disabled="!isGooglePaymentSupported" @click="initPayment(googlePaymentRequest)">google pay</button>
    <button :disabled="!isApplePaymentSupported" @click="initPayment(applePaymentRequest)">apple pay</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

// https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial?hl=zh-tw
const googlePaymentMethods = [
  {
    supportedMethods: 'https://google.com/pay',
    data: {
      environment: 'TEST', // 在測試階段設為 "TEST"，正式環境可設為 "PRODUCTION"
      apiVersion: 2,
      apiVersionMinor: 0,
      merchantInfo: {
        merchantName: 'Example Merchant',
      },
      allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['VISA', 'MASTERCARD'],
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'example', // 付款服務商，例如 "stripe" 或 "example"
              gatewayMerchantId: 'exampleGatewayMerchantId',
            },
          },
        },
      ],
    },
  },
]
// https://applepaydemo.apple.com/#createAPayment
const applePaymentMethods = [
  {
    supportedMethods: 'https://apple.com/apple-pay',
    data: {
      version: 3,
      merchantIdentifier: 'merchant.com.apdemo',
      merchantCapabilities: ['supports3DS'],
      supportedNetworks: ['masterCard', 'visa'],
      countryCode: 'TW',
      currencyCode: 'TWD',
    },
  },
]
const paymentDetails = {
  total: {
    label: 'Total',
    amount: { currency: 'TWD', value: '1' },
  },
}

const googlePaymentRequest = new PaymentRequest(googlePaymentMethods, paymentDetails)
const applePaymentRequest = new PaymentRequest(applePaymentMethods, paymentDetails)

const isGooglePaymentSupported = ref(false)
const isApplePaymentSupported = ref(false)

onMounted(async () => {
  ;[isGooglePaymentSupported.value, isApplePaymentSupported.value] = await Promise.all([
    googlePaymentRequest.canMakePayment(),
    applePaymentRequest.canMakePayment(),
  ])
})

async function initPayment(request: PaymentRequest) {
  try {
    if (!window.PaymentRequest) {
      alert('Payment Request API is not supported in this browser.')
      return
    }

    const paymentResponse = await request.show()

    await paymentResponse.complete('success')
    console.log('Payment was successful:', paymentResponse)
  } catch (error) {
    console.error('Payment failed:', error)
  }
}
</script>
