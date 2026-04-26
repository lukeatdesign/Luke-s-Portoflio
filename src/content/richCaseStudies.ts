import type { RichCaseStudy } from './richCaseStudy'
import { alphahomorav2CaseStudy } from './alphahomorav2CaseStudy'
import { initiamultisigCaseStudy } from './initiamultisigCaseStudy'
import { weavecliCaseStudy } from './weavecliCaseStudy'
import { nebulaprotocolCaseStudy } from './nebulaprotocolCaseStudy'
import { verticalprotocolCaseStudy } from './verticalprotocolCaseStudy'
import { rentpaymentCaseStudy } from './rentpaymentCaseStudy'
import { markrCaseStudy } from './markrCaseStudy'
import { ladderCaseStudy } from './ladderCaseStudy'

export const richCaseStudies: Record<string, RichCaseStudy> = {
  'alpha-homora-v2': alphahomorav2CaseStudy,
  'initia-multisig': initiamultisigCaseStudy,
  'weave-cli': weavecliCaseStudy,
  'nebula-protocol': nebulaprotocolCaseStudy,
  'vertical-protocol': verticalprotocolCaseStudy,
  'rent-payment': rentpaymentCaseStudy,
  markr: markrCaseStudy,
  ladder: ladderCaseStudy,
}
