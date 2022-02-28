import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'x14g9ydt',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skwl70Kmzb0TEyD4NCehAW2dsW8K0P5eC4h2vD4w1aPWMIDPzEBZLIP1DkouZOtT56viEY3fNKWvdA4KyEmSDrSK1yPD4FuSYhCM1JFJTuRm5ASELrkTaEim0BVvjUDMD4jbeUgwrCB8gt66gHVhyLcpdtjdz27d53MNahm3q6gG4lpREG7p',
  useCdn: false,
})