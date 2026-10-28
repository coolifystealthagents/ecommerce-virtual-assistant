import type { ResearchPost } from './types';

export const october28ResearchBatch: readonly ResearchPost[] = [
  {
    "slug": "eva28-backorder-date-accuracy",
    "title": "How Often Do Backorder Notices Match the Actual Restock Date?",
    "summary": "A measurement protocol for backorder date accuracy in ecommerce operations, testing whether the customer notice and the receiving record agree with a frozen population, an evidence sample, and a dated review.",
    "cluster": "Ecommerce operations",
    "publishedAt": "2026-10-28",
    "finding": "This study asks whether the backorder date accuracy can be reconstructed from the commerce record without relying on memory or a private chat. It is designed for an ecommerce operations leader deciding how to staff and review the workflow, not for ranking individual specialists.",
    "thumbnail": "/daily28/ecommercevirtualassistant/eva28-backorder-date-accuracy.png",
    "sections": [
      {
        "heading": "Decision the study supports",
        "paragraphs": [
          "This study asks whether the backorder date accuracy can be reconstructed from the commerce record without relying on memory or a private chat. It is designed for an ecommerce operations leader deciding how to staff and review the workflow, not for ranking individual specialists.",
          "The analysis separates a verified record, a calculation from that record, an operational interpretation, and an accountable decision. An analyst may prepare the first two. The operations owner makes the latter two and records the limits of that judgment."
        ]
      },
      {
        "heading": "Research question and unit of analysis",
        "paragraphs": [
          "The primary question is whether the backorder date accuracy preserves enough evidence for a second reviewer to reconstruct the customer request, the product or order state, the permitted action, and the next commitment. The unit is one order or one SKU journey, not one message and not one shift.",
          "The population is every eligible item in a frozen observation window, including completed, repeated, transferred, cancelled, and unresolved work. Freeze the population before coding so a convenient case cannot be added after a pattern becomes visible."
        ]
      },
      {
        "heading": "What the sources establish",
        "paragraphs": [
          "The cited public sources frame consumer information, privacy, payment security, accessibility, records, or retail measurement. They help define what a reliable process should preserve. They do not provide a measured result for any particular store.",
          "Facts drawn directly from a source should be cited as facts. A proposed field, review rule, or staffing response is an analytical choice unless the source requires it. Where guidance applies only to a jurisdiction or channel, treat it as context and obtain qualified advice before turning it into policy."
        ]
      },
      {
        "heading": "Required data dictionary",
        "paragraphs": [
          "Create a dated codebook before opening the sample. Capture the order or SKU reference, channel, source system, observed state, customer message, carrier or warehouse event, owner, next promise, and final disposition. Define every state and timestamp.",
          "Use separate codes for missing, not applicable, unavailable, pending, and confirmed negative. A blank field is not proof that an event did not happen. Keep the original observed value alongside any normalized value so a correction does not erase what the first reviewer saw."
        ]
      },
      {
        "heading": "Sampling plan",
        "paragraphs": [
          "Start with a census when the eligible population is small. Otherwise draw a reproducible sample and stratify by channel, order value, product type, warehouse, carrier, and whether the item crossed a campaign or peak-period boundary.",
          "Include clean, failed, repeated, cancelled, and unresolved cases. Sampling only settled orders overstates reliability because it removes the cases most likely to contain missing evidence or a hidden correction. Oversample high-consequence paths for diagnosis, but weight them before reporting an overall rate."
        ]
      },
      {
        "heading": "Coding rubric and failure definition",
        "paragraphs": [
          "Code each required field as present and traceable, present but ambiguous, missing, or not applicable. The primary failure condition is that the record cannot show what was checked, what the customer was told, who accepted the handoff, and what would close the item.",
          "Do not treat every exception as a defect. A pause or escalation can be the correct outcome when the record explains the boundary and names the next owner. A fast close is not a success if the destination system lacks the event or the customer never received the confirmation."
        ]
      },
      {
        "heading": "Measures and denominators",
        "paragraphs": [
          "Report eligible cases, sampled cases, excluded cases, and unresolved cases before percentages. Useful measures include complete-evidence rate, acknowledged-handoff rate, repeat-contact rate, median time to a concrete update, and the share of open items with a named next owner.",
          "Every measure needs a numerator, denominator, window, timezone, and missing-data rule. Show counts beside percentages. Compare periods only when the population, codebook, channels, and coverage hours are materially similar; otherwise label the comparison exploratory."
        ]
      },
      {
        "heading": "Bias and sensitivity checks",
        "paragraphs": [
          "The record may overrepresent orders handled in the tracked platform, items that reached closure, or teams with cleaner templates. A journey that moves through marketplace messages, email, and the help desk can fragment into several records and appear either faster or slower than it was.",
          "Rerun the main measure with ambiguous cases counted as failures and then as excluded. Remove the high-risk oversample and link duplicate contacts at the order level. If the direction changes, call the finding fragile and publish the uncertainty rather than a precise-looking number."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "Collect only the fields needed for the question. Replace direct identifiers with restricted references, separate the analysis extract from the order record, use named accounts, and set a disposal date. Do not publish customer messages, addresses, payment data, fraud rules, or warehouse credentials.",
          "The review process and any customer-facing follow-up must remain accessible. Test forms, status messages, and handoff instructions with keyboard navigation and assistive technology. Escalate suspected unauthorized access through the approved incident process rather than resolving it inside the research file."
        ]
      },
      {
        "heading": "Analysis and interpretation",
        "paragraphs": [
          "Present observations first: counts, missing fields, disagreement patterns, and timing distributions. Then present calculations. Label an explanation as an inference unless the design supports a causal conclusion. Compare failure clusters with the conditions that existed at the time, including campaign load and warehouse coverage.",
          "The useful output is usually a bounded action: clarify one field, require one acknowledgement, add one source link, or test one notice window. Avoid turning a descriptive association into a broad staffing or automation claim. A staffing response is credible only when the workload, skill, schedule, and authority boundary are visible.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control."
        ]
      }
    ],
    "sources": [
      {
        "label": "FTC Mail, Internet, or Telephone Order Merchandise Rule",
        "url": "https://www.ftc.gov/legal-library/browse/rules/mail-internet-or-telephone-order-merchandise-rule"
      },
      {
        "label": "U.S. Census Bureau Retail Data",
        "url": "https://www.census.gov/retail/index.html"
      },
      {
        "label": "NARA Records Management",
        "url": "https://www.archives.gov/records-mgmt/policy"
      },
      {
        "label": "CISA Secure Our World",
        "url": "https://www.cisa.gov/secure-our-world"
      },
      {
        "label": "FTC, Protecting Personal Information",
        "url": "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business"
      },
      {
        "label": "WCAG 2.2",
        "url": "https://www.w3.org/TR/WCAG22/"
      }
    ]
  },
  {
    "slug": "eva28-return-receipt-timing",
    "title": "Do Return Label Promises Match Warehouse Receipt Timing?",
    "summary": "A measurement protocol for return receipt timing in ecommerce operations, testing whether a generated label is followed by a documented warehouse event with a frozen population, an evidence sample, and a dated review.",
    "cluster": "Ecommerce operations",
    "publishedAt": "2026-10-28",
    "finding": "This study asks whether the return receipt timing can be reconstructed from the commerce record without relying on memory or a private chat. It is designed for an ecommerce operations leader deciding how to staff and review the workflow, not for ranking individual specialists.",
    "thumbnail": "/daily28/ecommercevirtualassistant/eva28-return-receipt-timing.png",
    "sections": [
      {
        "heading": "Decision the study supports",
        "paragraphs": [
          "This study asks whether the return receipt timing can be reconstructed from the commerce record without relying on memory or a private chat. It is designed for an ecommerce operations leader deciding how to staff and review the workflow, not for ranking individual specialists.",
          "The analysis separates a verified record, a calculation from that record, an operational interpretation, and an accountable decision. An analyst may prepare the first two. The operations owner makes the latter two and records the limits of that judgment."
        ]
      },
      {
        "heading": "Research question and unit of analysis",
        "paragraphs": [
          "The primary question is whether the return receipt timing preserves enough evidence for a second reviewer to reconstruct the customer request, the product or order state, the permitted action, and the next commitment. The unit is one order or one SKU journey, not one message and not one shift.",
          "The population is every eligible item in a frozen observation window, including completed, repeated, transferred, cancelled, and unresolved work. Freeze the population before coding so a convenient case cannot be added after a pattern becomes visible."
        ]
      },
      {
        "heading": "What the sources establish",
        "paragraphs": [
          "The cited public sources frame consumer information, privacy, payment security, accessibility, records, or retail measurement. They help define what a reliable process should preserve. They do not provide a measured result for any particular store.",
          "Facts drawn directly from a source should be cited as facts. A proposed field, review rule, or staffing response is an analytical choice unless the source requires it. Where guidance applies only to a jurisdiction or channel, treat it as context and obtain qualified advice before turning it into policy."
        ]
      },
      {
        "heading": "Required data dictionary",
        "paragraphs": [
          "Create a dated codebook before opening the sample. Capture the order or SKU reference, channel, source system, observed state, customer message, carrier or warehouse event, owner, next promise, and final disposition. Define every state and timestamp.",
          "Use separate codes for missing, not applicable, unavailable, pending, and confirmed negative. A blank field is not proof that an event did not happen. Keep the original observed value alongside any normalized value so a correction does not erase what the first reviewer saw."
        ]
      },
      {
        "heading": "Sampling plan",
        "paragraphs": [
          "Start with a census when the eligible population is small. Otherwise draw a reproducible sample and stratify by channel, order value, product type, warehouse, carrier, and whether the item crossed a campaign or peak-period boundary.",
          "Include clean, failed, repeated, cancelled, and unresolved cases. Sampling only settled orders overstates reliability because it removes the cases most likely to contain missing evidence or a hidden correction. Oversample high-consequence paths for diagnosis, but weight them before reporting an overall rate."
        ]
      },
      {
        "heading": "Coding rubric and failure definition",
        "paragraphs": [
          "Code each required field as present and traceable, present but ambiguous, missing, or not applicable. The primary failure condition is that the record cannot show what was checked, what the customer was told, who accepted the handoff, and what would close the item.",
          "Do not treat every exception as a defect. A pause or escalation can be the correct outcome when the record explains the boundary and names the next owner. A fast close is not a success if the destination system lacks the event or the customer never received the confirmation."
        ]
      },
      {
        "heading": "Measures and denominators",
        "paragraphs": [
          "Report eligible cases, sampled cases, excluded cases, and unresolved cases before percentages. Useful measures include complete-evidence rate, acknowledged-handoff rate, repeat-contact rate, median time to a concrete update, and the share of open items with a named next owner.",
          "Every measure needs a numerator, denominator, window, timezone, and missing-data rule. Show counts beside percentages. Compare periods only when the population, codebook, channels, and coverage hours are materially similar; otherwise label the comparison exploratory."
        ]
      },
      {
        "heading": "Bias and sensitivity checks",
        "paragraphs": [
          "The record may overrepresent orders handled in the tracked platform, items that reached closure, or teams with cleaner templates. A journey that moves through marketplace messages, email, and the help desk can fragment into several records and appear either faster or slower than it was.",
          "Rerun the main measure with ambiguous cases counted as failures and then as excluded. Remove the high-risk oversample and link duplicate contacts at the order level. If the direction changes, call the finding fragile and publish the uncertainty rather than a precise-looking number."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "Collect only the fields needed for the question. Replace direct identifiers with restricted references, separate the analysis extract from the order record, use named accounts, and set a disposal date. Do not publish customer messages, addresses, payment data, fraud rules, or warehouse credentials.",
          "The review process and any customer-facing follow-up must remain accessible. Test forms, status messages, and handoff instructions with keyboard navigation and assistive technology. Escalate suspected unauthorized access through the approved incident process rather than resolving it inside the research file."
        ]
      },
      {
        "heading": "Analysis and interpretation",
        "paragraphs": [
          "Present observations first: counts, missing fields, disagreement patterns, and timing distributions. Then present calculations. Label an explanation as an inference unless the design supports a causal conclusion. Compare failure clusters with the conditions that existed at the time, including campaign load and warehouse coverage.",
          "The useful output is usually a bounded action: clarify one field, require one acknowledgement, add one source link, or test one notice window. Avoid turning a descriptive association into a broad staffing or automation claim. A staffing response is credible only when the workload, skill, schedule, and authority boundary are visible.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control."
        ]
      }
    ],
    "sources": [
      {
        "label": "FTC, Solving Problems With a Business",
        "url": "https://consumer.ftc.gov/articles/solving-problems-business-returns-refunds-and-other-resolutions"
      },
      {
        "label": "NARA Records Management",
        "url": "https://www.archives.gov/records-mgmt/policy"
      },
      {
        "label": "CISA Secure Our World",
        "url": "https://www.cisa.gov/secure-our-world"
      },
      {
        "label": "PCI Data Security Standard",
        "url": "https://www.pcisecuritystandards.org/standards/pci-dss/"
      },
      {
        "label": "FTC, Protecting Personal Information",
        "url": "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business"
      },
      {
        "label": "WCAG 2.2",
        "url": "https://www.w3.org/TR/WCAG22/"
      }
    ]
  },
  {
    "slug": "eva28-variant-image-accuracy",
    "title": "What Share of Variant Images Match the Approved SKU?",
    "summary": "A measurement protocol for variant image accuracy in ecommerce operations, testing whether the selected option, image, and product record agree with a frozen population, an evidence sample, and a dated review.",
    "cluster": "Ecommerce operations",
    "publishedAt": "2026-10-28",
    "finding": "This study asks whether the variant image accuracy can be reconstructed from the commerce record without relying on memory or a private chat. It is designed for an ecommerce operations leader deciding how to staff and review the workflow, not for ranking individual specialists.",
    "thumbnail": "/daily28/ecommercevirtualassistant/eva28-variant-image-accuracy.png",
    "sections": [
      {
        "heading": "Decision the study supports",
        "paragraphs": [
          "This study asks whether the variant image accuracy can be reconstructed from the commerce record without relying on memory or a private chat. It is designed for an ecommerce operations leader deciding how to staff and review the workflow, not for ranking individual specialists.",
          "The analysis separates a verified record, a calculation from that record, an operational interpretation, and an accountable decision. An analyst may prepare the first two. The operations owner makes the latter two and records the limits of that judgment."
        ]
      },
      {
        "heading": "Research question and unit of analysis",
        "paragraphs": [
          "The primary question is whether the variant image accuracy preserves enough evidence for a second reviewer to reconstruct the customer request, the product or order state, the permitted action, and the next commitment. The unit is one order or one SKU journey, not one message and not one shift.",
          "The population is every eligible item in a frozen observation window, including completed, repeated, transferred, cancelled, and unresolved work. Freeze the population before coding so a convenient case cannot be added after a pattern becomes visible."
        ]
      },
      {
        "heading": "What the sources establish",
        "paragraphs": [
          "The cited public sources frame consumer information, privacy, payment security, accessibility, records, or retail measurement. They help define what a reliable process should preserve. They do not provide a measured result for any particular store.",
          "Facts drawn directly from a source should be cited as facts. A proposed field, review rule, or staffing response is an analytical choice unless the source requires it. Where guidance applies only to a jurisdiction or channel, treat it as context and obtain qualified advice before turning it into policy."
        ]
      },
      {
        "heading": "Required data dictionary",
        "paragraphs": [
          "Create a dated codebook before opening the sample. Capture the order or SKU reference, channel, source system, observed state, customer message, carrier or warehouse event, owner, next promise, and final disposition. Define every state and timestamp.",
          "Use separate codes for missing, not applicable, unavailable, pending, and confirmed negative. A blank field is not proof that an event did not happen. Keep the original observed value alongside any normalized value so a correction does not erase what the first reviewer saw."
        ]
      },
      {
        "heading": "Sampling plan",
        "paragraphs": [
          "Start with a census when the eligible population is small. Otherwise draw a reproducible sample and stratify by channel, order value, product type, warehouse, carrier, and whether the item crossed a campaign or peak-period boundary.",
          "Include clean, failed, repeated, cancelled, and unresolved cases. Sampling only settled orders overstates reliability because it removes the cases most likely to contain missing evidence or a hidden correction. Oversample high-consequence paths for diagnosis, but weight them before reporting an overall rate."
        ]
      },
      {
        "heading": "Coding rubric and failure definition",
        "paragraphs": [
          "Code each required field as present and traceable, present but ambiguous, missing, or not applicable. The primary failure condition is that the record cannot show what was checked, what the customer was told, who accepted the handoff, and what would close the item.",
          "Do not treat every exception as a defect. A pause or escalation can be the correct outcome when the record explains the boundary and names the next owner. A fast close is not a success if the destination system lacks the event or the customer never received the confirmation."
        ]
      },
      {
        "heading": "Measures and denominators",
        "paragraphs": [
          "Report eligible cases, sampled cases, excluded cases, and unresolved cases before percentages. Useful measures include complete-evidence rate, acknowledged-handoff rate, repeat-contact rate, median time to a concrete update, and the share of open items with a named next owner.",
          "Every measure needs a numerator, denominator, window, timezone, and missing-data rule. Show counts beside percentages. Compare periods only when the population, codebook, channels, and coverage hours are materially similar; otherwise label the comparison exploratory."
        ]
      },
      {
        "heading": "Bias and sensitivity checks",
        "paragraphs": [
          "The record may overrepresent orders handled in the tracked platform, items that reached closure, or teams with cleaner templates. A journey that moves through marketplace messages, email, and the help desk can fragment into several records and appear either faster or slower than it was.",
          "Rerun the main measure with ambiguous cases counted as failures and then as excluded. Remove the high-risk oversample and link duplicate contacts at the order level. If the direction changes, call the finding fragile and publish the uncertainty rather than a precise-looking number."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "Collect only the fields needed for the question. Replace direct identifiers with restricted references, separate the analysis extract from the order record, use named accounts, and set a disposal date. Do not publish customer messages, addresses, payment data, fraud rules, or warehouse credentials.",
          "The review process and any customer-facing follow-up must remain accessible. Test forms, status messages, and handoff instructions with keyboard navigation and assistive technology. Escalate suspected unauthorized access through the approved incident process rather than resolving it inside the research file."
        ]
      },
      {
        "heading": "Analysis and interpretation",
        "paragraphs": [
          "Present observations first: counts, missing fields, disagreement patterns, and timing distributions. Then present calculations. Label an explanation as an inference unless the design supports a causal conclusion. Compare failure clusters with the conditions that existed at the time, including campaign load and warehouse coverage.",
          "The useful output is usually a bounded action: clarify one field, require one acknowledgement, add one source link, or test one notice window. Avoid turning a descriptive association into a broad staffing or automation claim. A staffing response is credible only when the workload, skill, schedule, and authority boundary are visible.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control."
        ]
      }
    ],
    "sources": [
      {
        "label": "WCAG 2.2",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "label": "FTC Mail, Internet, or Telephone Order Merchandise Rule",
        "url": "https://www.ftc.gov/legal-library/browse/rules/mail-internet-or-telephone-order-merchandise-rule"
      },
      {
        "label": "NARA Records Management",
        "url": "https://www.archives.gov/records-mgmt/policy"
      },
      {
        "label": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "CISA Secure Our World",
        "url": "https://www.cisa.gov/secure-our-world"
      },
      {
        "label": "U.S. Census Bureau Retail Data",
        "url": "https://www.census.gov/retail/index.html"
      }
    ]
  },
  {
    "slug": "eva28-lost-package-evidence",
    "title": "How Complete Is Lost-Package Claim Evidence?",
    "summary": "A measurement protocol for lost-package evidence in ecommerce operations, testing whether the claim record shows the carrier event, customer statement, and owner with a frozen population, an evidence sample, and a dated review.",
    "cluster": "Ecommerce operations",
    "publishedAt": "2026-10-28",
    "finding": "This study asks whether the lost-package evidence can be reconstructed from the commerce record without relying on memory or a private chat. It is designed for an ecommerce operations leader deciding how to staff and review the workflow, not for ranking individual specialists.",
    "thumbnail": "/daily28/ecommercevirtualassistant/eva28-lost-package-evidence.png",
    "sections": [
      {
        "heading": "Decision the study supports",
        "paragraphs": [
          "This study asks whether the lost-package evidence can be reconstructed from the commerce record without relying on memory or a private chat. It is designed for an ecommerce operations leader deciding how to staff and review the workflow, not for ranking individual specialists.",
          "The analysis separates a verified record, a calculation from that record, an operational interpretation, and an accountable decision. An analyst may prepare the first two. The operations owner makes the latter two and records the limits of that judgment."
        ]
      },
      {
        "heading": "Research question and unit of analysis",
        "paragraphs": [
          "The primary question is whether the lost-package evidence preserves enough evidence for a second reviewer to reconstruct the customer request, the product or order state, the permitted action, and the next commitment. The unit is one order or one SKU journey, not one message and not one shift.",
          "The population is every eligible item in a frozen observation window, including completed, repeated, transferred, cancelled, and unresolved work. Freeze the population before coding so a convenient case cannot be added after a pattern becomes visible."
        ]
      },
      {
        "heading": "What the sources establish",
        "paragraphs": [
          "The cited public sources frame consumer information, privacy, payment security, accessibility, records, or retail measurement. They help define what a reliable process should preserve. They do not provide a measured result for any particular store.",
          "Facts drawn directly from a source should be cited as facts. A proposed field, review rule, or staffing response is an analytical choice unless the source requires it. Where guidance applies only to a jurisdiction or channel, treat it as context and obtain qualified advice before turning it into policy."
        ]
      },
      {
        "heading": "Required data dictionary",
        "paragraphs": [
          "Create a dated codebook before opening the sample. Capture the order or SKU reference, channel, source system, observed state, customer message, carrier or warehouse event, owner, next promise, and final disposition. Define every state and timestamp.",
          "Use separate codes for missing, not applicable, unavailable, pending, and confirmed negative. A blank field is not proof that an event did not happen. Keep the original observed value alongside any normalized value so a correction does not erase what the first reviewer saw."
        ]
      },
      {
        "heading": "Sampling plan",
        "paragraphs": [
          "Start with a census when the eligible population is small. Otherwise draw a reproducible sample and stratify by channel, order value, product type, warehouse, carrier, and whether the item crossed a campaign or peak-period boundary.",
          "Include clean, failed, repeated, cancelled, and unresolved cases. Sampling only settled orders overstates reliability because it removes the cases most likely to contain missing evidence or a hidden correction. Oversample high-consequence paths for diagnosis, but weight them before reporting an overall rate."
        ]
      },
      {
        "heading": "Coding rubric and failure definition",
        "paragraphs": [
          "Code each required field as present and traceable, present but ambiguous, missing, or not applicable. The primary failure condition is that the record cannot show what was checked, what the customer was told, who accepted the handoff, and what would close the item.",
          "Do not treat every exception as a defect. A pause or escalation can be the correct outcome when the record explains the boundary and names the next owner. A fast close is not a success if the destination system lacks the event or the customer never received the confirmation."
        ]
      },
      {
        "heading": "Measures and denominators",
        "paragraphs": [
          "Report eligible cases, sampled cases, excluded cases, and unresolved cases before percentages. Useful measures include complete-evidence rate, acknowledged-handoff rate, repeat-contact rate, median time to a concrete update, and the share of open items with a named next owner.",
          "Every measure needs a numerator, denominator, window, timezone, and missing-data rule. Show counts beside percentages. Compare periods only when the population, codebook, channels, and coverage hours are materially similar; otherwise label the comparison exploratory."
        ]
      },
      {
        "heading": "Bias and sensitivity checks",
        "paragraphs": [
          "The record may overrepresent orders handled in the tracked platform, items that reached closure, or teams with cleaner templates. A journey that moves through marketplace messages, email, and the help desk can fragment into several records and appear either faster or slower than it was.",
          "Rerun the main measure with ambiguous cases counted as failures and then as excluded. Remove the high-risk oversample and link duplicate contacts at the order level. If the direction changes, call the finding fragile and publish the uncertainty rather than a precise-looking number."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "Collect only the fields needed for the question. Replace direct identifiers with restricted references, separate the analysis extract from the order record, use named accounts, and set a disposal date. Do not publish customer messages, addresses, payment data, fraud rules, or warehouse credentials.",
          "The review process and any customer-facing follow-up must remain accessible. Test forms, status messages, and handoff instructions with keyboard navigation and assistive technology. Escalate suspected unauthorized access through the approved incident process rather than resolving it inside the research file."
        ]
      },
      {
        "heading": "Analysis and interpretation",
        "paragraphs": [
          "Present observations first: counts, missing fields, disagreement patterns, and timing distributions. Then present calculations. Label an explanation as an inference unless the design supports a causal conclusion. Compare failure clusters with the conditions that existed at the time, including campaign load and warehouse coverage.",
          "The useful output is usually a bounded action: clarify one field, require one acknowledgement, add one source link, or test one notice window. Avoid turning a descriptive association into a broad staffing or automation claim. A staffing response is credible only when the workload, skill, schedule, and authority boundary are visible.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control."
        ]
      }
    ],
    "sources": [
      {
        "label": "FTC, Solving Problems With a Business",
        "url": "https://consumer.ftc.gov/articles/solving-problems-business-returns-refunds-and-other-resolutions"
      },
      {
        "label": "NARA Records Management",
        "url": "https://www.archives.gov/records-mgmt/policy"
      },
      {
        "label": "CISA Secure Our World",
        "url": "https://www.cisa.gov/secure-our-world"
      },
      {
        "label": "FTC, Protecting Personal Information",
        "url": "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business"
      },
      {
        "label": "PCI Data Security Standard",
        "url": "https://www.pcisecuritystandards.org/standards/pci-dss/"
      },
      {
        "label": "WCAG 2.2",
        "url": "https://www.w3.org/TR/WCAG22/"
      }
    ]
  },
  {
    "slug": "eva28-sku-lineage-continuity",
    "title": "Does a Catalog Migration Preserve Duplicate-SKU Lineage?",
    "summary": "A measurement protocol for duplicate-SKU lineage in ecommerce operations, testing whether an old identifier can still be traced to the merged item with a frozen population, an evidence sample, and a dated review.",
    "cluster": "Ecommerce operations",
    "publishedAt": "2026-10-28",
    "finding": "This study asks whether the duplicate-SKU lineage can be reconstructed from the commerce record without relying on memory or a private chat. It is designed for an ecommerce operations leader deciding how to staff and review the workflow, not for ranking individual specialists.",
    "thumbnail": "/daily28/ecommercevirtualassistant/eva28-sku-lineage-continuity.png",
    "sections": [
      {
        "heading": "Decision the study supports",
        "paragraphs": [
          "This study asks whether the duplicate-SKU lineage can be reconstructed from the commerce record without relying on memory or a private chat. It is designed for an ecommerce operations leader deciding how to staff and review the workflow, not for ranking individual specialists.",
          "The analysis separates a verified record, a calculation from that record, an operational interpretation, and an accountable decision. An analyst may prepare the first two. The operations owner makes the latter two and records the limits of that judgment."
        ]
      },
      {
        "heading": "Research question and unit of analysis",
        "paragraphs": [
          "The primary question is whether the duplicate-SKU lineage preserves enough evidence for a second reviewer to reconstruct the customer request, the product or order state, the permitted action, and the next commitment. The unit is one order or one SKU journey, not one message and not one shift.",
          "The population is every eligible item in a frozen observation window, including completed, repeated, transferred, cancelled, and unresolved work. Freeze the population before coding so a convenient case cannot be added after a pattern becomes visible."
        ]
      },
      {
        "heading": "What the sources establish",
        "paragraphs": [
          "The cited public sources frame consumer information, privacy, payment security, accessibility, records, or retail measurement. They help define what a reliable process should preserve. They do not provide a measured result for any particular store.",
          "Facts drawn directly from a source should be cited as facts. A proposed field, review rule, or staffing response is an analytical choice unless the source requires it. Where guidance applies only to a jurisdiction or channel, treat it as context and obtain qualified advice before turning it into policy."
        ]
      },
      {
        "heading": "Required data dictionary",
        "paragraphs": [
          "Create a dated codebook before opening the sample. Capture the order or SKU reference, channel, source system, observed state, customer message, carrier or warehouse event, owner, next promise, and final disposition. Define every state and timestamp.",
          "Use separate codes for missing, not applicable, unavailable, pending, and confirmed negative. A blank field is not proof that an event did not happen. Keep the original observed value alongside any normalized value so a correction does not erase what the first reviewer saw."
        ]
      },
      {
        "heading": "Sampling plan",
        "paragraphs": [
          "Start with a census when the eligible population is small. Otherwise draw a reproducible sample and stratify by channel, order value, product type, warehouse, carrier, and whether the item crossed a campaign or peak-period boundary.",
          "Include clean, failed, repeated, cancelled, and unresolved cases. Sampling only settled orders overstates reliability because it removes the cases most likely to contain missing evidence or a hidden correction. Oversample high-consequence paths for diagnosis, but weight them before reporting an overall rate."
        ]
      },
      {
        "heading": "Coding rubric and failure definition",
        "paragraphs": [
          "Code each required field as present and traceable, present but ambiguous, missing, or not applicable. The primary failure condition is that the record cannot show what was checked, what the customer was told, who accepted the handoff, and what would close the item.",
          "Do not treat every exception as a defect. A pause or escalation can be the correct outcome when the record explains the boundary and names the next owner. A fast close is not a success if the destination system lacks the event or the customer never received the confirmation."
        ]
      },
      {
        "heading": "Measures and denominators",
        "paragraphs": [
          "Report eligible cases, sampled cases, excluded cases, and unresolved cases before percentages. Useful measures include complete-evidence rate, acknowledged-handoff rate, repeat-contact rate, median time to a concrete update, and the share of open items with a named next owner.",
          "Every measure needs a numerator, denominator, window, timezone, and missing-data rule. Show counts beside percentages. Compare periods only when the population, codebook, channels, and coverage hours are materially similar; otherwise label the comparison exploratory."
        ]
      },
      {
        "heading": "Bias and sensitivity checks",
        "paragraphs": [
          "The record may overrepresent orders handled in the tracked platform, items that reached closure, or teams with cleaner templates. A journey that moves through marketplace messages, email, and the help desk can fragment into several records and appear either faster or slower than it was.",
          "Rerun the main measure with ambiguous cases counted as failures and then as excluded. Remove the high-risk oversample and link duplicate contacts at the order level. If the direction changes, call the finding fragile and publish the uncertainty rather than a precise-looking number."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "Collect only the fields needed for the question. Replace direct identifiers with restricted references, separate the analysis extract from the order record, use named accounts, and set a disposal date. Do not publish customer messages, addresses, payment data, fraud rules, or warehouse credentials.",
          "The review process and any customer-facing follow-up must remain accessible. Test forms, status messages, and handoff instructions with keyboard navigation and assistive technology. Escalate suspected unauthorized access through the approved incident process rather than resolving it inside the research file."
        ]
      },
      {
        "heading": "Analysis and interpretation",
        "paragraphs": [
          "Present observations first: counts, missing fields, disagreement patterns, and timing distributions. Then present calculations. Label an explanation as an inference unless the design supports a causal conclusion. Compare failure clusters with the conditions that existed at the time, including campaign load and warehouse coverage.",
          "The useful output is usually a bounded action: clarify one field, require one acknowledgement, add one source link, or test one notice window. Avoid turning a descriptive association into a broad staffing or automation claim. A staffing response is credible only when the workload, skill, schedule, and authority boundary are visible.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control.",
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list. A report without a review owner is an archive, not a control."
        ]
      }
    ],
    "sources": [
      {
        "label": "NARA Records Management",
        "url": "https://www.archives.gov/records-mgmt/policy"
      },
      {
        "label": "U.S. Census Bureau Retail Data",
        "url": "https://www.census.gov/retail/index.html"
      },
      {
        "label": "FTC, Protecting Personal Information",
        "url": "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business"
      },
      {
        "label": "CISA Secure Our World",
        "url": "https://www.cisa.gov/secure-our-world"
      },
      {
        "label": "WCAG 2.2",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "label": "PCI Data Security Standard",
        "url": "https://www.pcisecuritystandards.org/standards/pci-dss/"
      }
    ]
  }
];
