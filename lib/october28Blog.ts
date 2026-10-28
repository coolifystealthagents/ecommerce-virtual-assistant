import type { BlogPost } from './types';

export const october28BlogBatch: readonly BlogPost[] = [
  {
    "slug": "eva28-product-feed-audit",
    "title": "Audit a Product Feed Before a Seasonal Launch",
    "description": "A practical ecommerce operations guide to the product feed audit, focused on checking titles, variants, stock, and shipping fields before a campaign, with a named source, a bounded queue, and a close condition.",
    "category": "Ecommerce operations",
    "publishedAt": "2026-10-28",
    "readTime": "5 min read",
    "thumbnail": "/daily28/ecommercevirtualassistant/eva28-product-feed-audit.png",
    "sections": [
      {
        "heading": "Why this ecommerce control matters",
        "paragraphs": [
          "An ecommerce team can mark the product feed audit complete while the next specialist still cannot see which source was checked, which customer promise was made, or who owns the next step. The control exists to make that chain visible before a campaign, a refund, or a warehouse handoff depends on it.",
          "The failure is usually small and expensive: a feed field copied from last season, a backorder notice with an invented date, or a return label counted as a received parcel. Each gap creates a customer contact that could have been prevented with one recorded source."
        ]
      },
      {
        "heading": "Start with the governing record",
        "paragraphs": [
          "Open the product feed audit at the system that owns the fact, not at the latest campaign note. Record the SKU or order reference, the source field, the version observed, the channel, the time, and the person who can confirm it.",
          "Keep the observation separate from the specialist interpretation. When the product record, marketplace listing, and customer message disagree, preserve all three and label the conflict. A clean summary that hides the disagreement is not evidence."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "The specialist may collect, compare, label, draft, and route the product feed audit. the ecommerce operations owner decides whether an exception changes a price, a customer promise, a refund, access, or a compliance position. Write that boundary into the task brief before the work starts.",
          "A complete packet is not an approval. A drafted notice, a proposed price, or a recommended refund still needs the named owner when policy or risk is involved. The specialist should stop when the source is missing, the records conflict, or the request exceeds the written scope."
        ]
      },
      {
        "heading": "Build the daily routine",
        "paragraphs": [
          "Each day, review the product feed audit queue, confirm the latest source, record the exception, and leave a next action with an owner and a time. Use the same fields so a reviewer can compare one order with another without reading the whole thread.",
          "Keep the queue separate from general inbox work. Measure the age of the oldest open item, the number waiting on a warehouse event, and the number waiting on an owner decision. An average alone hides the case that has waited longest."
        ]
      },
      {
        "heading": "Handle exceptions before they age",
        "paragraphs": [
          "Use a short reason set for the product feed audit: missing source, wrong SKU, stale inventory, conflicting carrier event, price mismatch, fraud review, and customer accommodation. The reason should describe the evidence problem, not the person who found it.",
          "When an exception touches payment data, a pre-order promise, a refund, or a marketplace penalty, pause the dependent action and route it. Urgency does not create approval. Record the owner, the compensating check, and the date the exception expires."
        ]
      },
      {
        "heading": "Verify the close, not the activity",
        "paragraphs": [
          "Close the product feed audit only when the destination system shows the result. A label marked generated is not a received return, a notice marked sent is not a customer who understood the new date, and a feed marked uploaded is not a live listing that matches the catalog.",
          "At the end of the day, explain the carryover instead of silently moving it forward. Review a small sample each week and compare the source, the customer message, the order event, and the confirmation. A repeated gap usually means the template or the rule needs repair."
        ]
      },
      {
        "heading": "What the specialist prepares and what the owner decides",
        "paragraphs": [
          "For checking titles, variants, stock, and shipping fields before a campaign, the specialist makes the decision ready: the source, the options, the customer impact, and the consequence of waiting. the ecommerce operations owner chooses the path and remains accountable for the price, promise, refund, or policy exception.",
          "Write the boundary in plain language beside the queue. A rule that exists only in onboarding disappears during a peak. Test it on one routine order, one exception, and one unresolved case before the specialist works independently."
        ]
      },
      {
        "heading": "A weekly review that changes one thing",
        "paragraphs": [
          "Hold one short weekly review of the product feed audit: the oldest item, the most repeated exception, and one case that was corrected. End with one process change, one owner, and one date to check whether the change worked. For audit a product feed before a seasonal launch, the review lead keeps a 1-case snapshot from the 2026-10-28 order export and notes the exact SKU or order reference changed.",
          "Use the same sample rule each week. A stable sample shows movement; a fresh convenience sample shows only that someone looked. Keep the source link and the customer confirmation with the record so a second reviewer can repeat the check.",
          "Record what would reopen the product feed audit: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the product feed audit: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the product feed audit: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the product feed audit: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should the team check in the product feed audit workflow?",
        "a": "Open the product feed audit at the system that owns the fact, not at the latest campaign note. Record the SKU or order reference, the source field, the version observed, the channel, the time, and the person who can confirm it."
      },
      {
        "q": "Who approves an exception?",
        "a": "The named ecommerce operations owner approves changes to price, refunds, customer promises, access, or a policy exception."
      }
    ],
    "internalService": "/services/ecommerce-support",
    "internalSibling": "/blog",
    "source": {
      "label": "FTC Mail, Internet, or Telephone Order Merchandise Rule",
      "url": "https://www.ftc.gov/legal-library/browse/rules/mail-internet-or-telephone-order-merchandise-rule"
    }
  },
  {
    "slug": "eva28-backorder-notification-triage",
    "title": "Triage a Backorder Notification Queue",
    "description": "A practical ecommerce operations guide to the backorder notification, focused on telling the customer what is known without inventing a restock date, with a named source, a bounded queue, and a close condition.",
    "category": "Ecommerce operations",
    "publishedAt": "2026-10-28",
    "readTime": "5 min read",
    "thumbnail": "/daily28/ecommercevirtualassistant/eva28-backorder-notification-triage.png",
    "sections": [
      {
        "heading": "Why this ecommerce control matters",
        "paragraphs": [
          "An ecommerce team can mark the backorder notification complete while the next specialist still cannot see which source was checked, which customer promise was made, or who owns the next step. The control exists to make that chain visible before a campaign, a refund, or a warehouse handoff depends on it.",
          "The failure is usually small and expensive: a feed field copied from last season, a backorder notice with an invented date, or a return label counted as a received parcel. Each gap creates a customer contact that could have been prevented with one recorded source."
        ]
      },
      {
        "heading": "Start with the governing record",
        "paragraphs": [
          "Open the backorder notification at the system that owns the fact, not at the latest campaign note. Record the SKU or order reference, the source field, the version observed, the channel, the time, and the person who can confirm it.",
          "Keep the observation separate from the specialist interpretation. When the product record, marketplace listing, and customer message disagree, preserve all three and label the conflict. A clean summary that hides the disagreement is not evidence."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "The specialist may collect, compare, label, draft, and route the backorder notification. the ecommerce operations owner decides whether an exception changes a price, a customer promise, a refund, access, or a compliance position. Write that boundary into the task brief before the work starts.",
          "A complete packet is not an approval. A drafted notice, a proposed price, or a recommended refund still needs the named owner when policy or risk is involved. The specialist should stop when the source is missing, the records conflict, or the request exceeds the written scope."
        ]
      },
      {
        "heading": "Build the daily routine",
        "paragraphs": [
          "Each day, review the backorder notification queue, confirm the latest source, record the exception, and leave a next action with an owner and a time. Use the same fields so a reviewer can compare one order with another without reading the whole thread.",
          "Keep the queue separate from general inbox work. Measure the age of the oldest open item, the number waiting on a warehouse event, and the number waiting on an owner decision. An average alone hides the case that has waited longest."
        ]
      },
      {
        "heading": "Handle exceptions before they age",
        "paragraphs": [
          "Use a short reason set for the backorder notification: missing source, wrong SKU, stale inventory, conflicting carrier event, price mismatch, fraud review, and customer accommodation. The reason should describe the evidence problem, not the person who found it.",
          "When an exception touches payment data, a pre-order promise, a refund, or a marketplace penalty, pause the dependent action and route it. Urgency does not create approval. Record the owner, the compensating check, and the date the exception expires."
        ]
      },
      {
        "heading": "Verify the close, not the activity",
        "paragraphs": [
          "Close the backorder notification only when the destination system shows the result. A label marked generated is not a received return, a notice marked sent is not a customer who understood the new date, and a feed marked uploaded is not a live listing that matches the catalog.",
          "At the end of the day, explain the carryover instead of silently moving it forward. Review a small sample each week and compare the source, the customer message, the order event, and the confirmation. A repeated gap usually means the template or the rule needs repair."
        ]
      },
      {
        "heading": "What the specialist prepares and what the owner decides",
        "paragraphs": [
          "For telling the customer what is known without inventing a restock date, the specialist makes the decision ready: the source, the options, the customer impact, and the consequence of waiting. the ecommerce operations owner chooses the path and remains accountable for the price, promise, refund, or policy exception.",
          "Write the boundary in plain language beside the queue. A rule that exists only in onboarding disappears during a peak. Test it on one routine order, one exception, and one unresolved case before the specialist works independently."
        ]
      },
      {
        "heading": "A weekly review that changes one thing",
        "paragraphs": [
          "Hold one short weekly review of the backorder notification: the oldest item, the most repeated exception, and one case that was corrected. End with one process change, one owner, and one date to check whether the change worked. For triage a backorder notification queue, the review lead keeps a 2-case snapshot from the 2026-10-28 order export and notes the exact SKU or order reference changed.",
          "Use the same sample rule each week. A stable sample shows movement; a fresh convenience sample shows only that someone looked. Keep the source link and the customer confirmation with the record so a second reviewer can repeat the check.",
          "Record what would reopen the backorder notification: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the backorder notification: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the backorder notification: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the backorder notification: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should the team check in the backorder notification workflow?",
        "a": "Open the backorder notification at the system that owns the fact, not at the latest campaign note. Record the SKU or order reference, the source field, the version observed, the channel, the time, and the person who can confirm it."
      },
      {
        "q": "Who approves an exception?",
        "a": "The named ecommerce operations owner approves changes to price, refunds, customer promises, access, or a policy exception."
      }
    ],
    "internalService": "/services/ecommerce-support",
    "internalSibling": "/blog",
    "source": {
      "label": "FTC Mail, Internet, or Telephone Order Merchandise Rule",
      "url": "https://www.ftc.gov/legal-library/browse/rules/mail-internet-or-telephone-order-merchandise-rule"
    }
  },
  {
    "slug": "eva28-return-label-receipt",
    "title": "Keep Return Label Promises Aligned With Warehouse Receipt",
    "description": "A practical ecommerce operations guide to the return label promise, focused on separating a generated label from a returned parcel that actually arrived, with a named source, a bounded queue, and a close condition.",
    "category": "Ecommerce operations",
    "publishedAt": "2026-10-28",
    "readTime": "5 min read",
    "thumbnail": "/daily28/ecommercevirtualassistant/eva28-return-label-receipt.png",
    "sections": [
      {
        "heading": "Why this ecommerce control matters",
        "paragraphs": [
          "An ecommerce team can mark the return label promise complete while the next specialist still cannot see which source was checked, which customer promise was made, or who owns the next step. The control exists to make that chain visible before a campaign, a refund, or a warehouse handoff depends on it.",
          "The failure is usually small and expensive: a feed field copied from last season, a backorder notice with an invented date, or a return label counted as a received parcel. Each gap creates a customer contact that could have been prevented with one recorded source."
        ]
      },
      {
        "heading": "Start with the governing record",
        "paragraphs": [
          "Open the return label promise at the system that owns the fact, not at the latest campaign note. Record the SKU or order reference, the source field, the version observed, the channel, the time, and the person who can confirm it.",
          "Keep the observation separate from the specialist interpretation. When the product record, marketplace listing, and customer message disagree, preserve all three and label the conflict. A clean summary that hides the disagreement is not evidence."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "The specialist may collect, compare, label, draft, and route the return label promise. the ecommerce operations owner decides whether an exception changes a price, a customer promise, a refund, access, or a compliance position. Write that boundary into the task brief before the work starts.",
          "A complete packet is not an approval. A drafted notice, a proposed price, or a recommended refund still needs the named owner when policy or risk is involved. The specialist should stop when the source is missing, the records conflict, or the request exceeds the written scope."
        ]
      },
      {
        "heading": "Build the daily routine",
        "paragraphs": [
          "Each day, review the return label promise queue, confirm the latest source, record the exception, and leave a next action with an owner and a time. Use the same fields so a reviewer can compare one order with another without reading the whole thread.",
          "Keep the queue separate from general inbox work. Measure the age of the oldest open item, the number waiting on a warehouse event, and the number waiting on an owner decision. An average alone hides the case that has waited longest."
        ]
      },
      {
        "heading": "Handle exceptions before they age",
        "paragraphs": [
          "Use a short reason set for the return label promise: missing source, wrong SKU, stale inventory, conflicting carrier event, price mismatch, fraud review, and customer accommodation. The reason should describe the evidence problem, not the person who found it.",
          "When an exception touches payment data, a pre-order promise, a refund, or a marketplace penalty, pause the dependent action and route it. Urgency does not create approval. Record the owner, the compensating check, and the date the exception expires."
        ]
      },
      {
        "heading": "Verify the close, not the activity",
        "paragraphs": [
          "Close the return label promise only when the destination system shows the result. A label marked generated is not a received return, a notice marked sent is not a customer who understood the new date, and a feed marked uploaded is not a live listing that matches the catalog.",
          "At the end of the day, explain the carryover instead of silently moving it forward. Review a small sample each week and compare the source, the customer message, the order event, and the confirmation. A repeated gap usually means the template or the rule needs repair."
        ]
      },
      {
        "heading": "What the specialist prepares and what the owner decides",
        "paragraphs": [
          "For separating a generated label from a returned parcel that actually arrived, the specialist makes the decision ready: the source, the options, the customer impact, and the consequence of waiting. the ecommerce operations owner chooses the path and remains accountable for the price, promise, refund, or policy exception.",
          "Write the boundary in plain language beside the queue. A rule that exists only in onboarding disappears during a peak. Test it on one routine order, one exception, and one unresolved case before the specialist works independently."
        ]
      },
      {
        "heading": "A weekly review that changes one thing",
        "paragraphs": [
          "Hold one short weekly review of the return label promise: the oldest item, the most repeated exception, and one case that was corrected. End with one process change, one owner, and one date to check whether the change worked. For keep return label promises aligned with warehouse receipt, the review lead keeps a 3-case snapshot from the 2026-10-28 order export and notes the exact SKU or order reference changed.",
          "Use the same sample rule each week. A stable sample shows movement; a fresh convenience sample shows only that someone looked. Keep the source link and the customer confirmation with the record so a second reviewer can repeat the check.",
          "Record what would reopen the return label promise: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the return label promise: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the return label promise: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the return label promise: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should the team check in the return label promise workflow?",
        "a": "Open the return label promise at the system that owns the fact, not at the latest campaign note. Record the SKU or order reference, the source field, the version observed, the channel, the time, and the person who can confirm it."
      },
      {
        "q": "Who approves an exception?",
        "a": "The named ecommerce operations owner approves changes to price, refunds, customer promises, access, or a policy exception."
      }
    ],
    "internalService": "/services/ecommerce-support",
    "internalSibling": "/blog",
    "source": {
      "label": "FTC, Solving Problems With a Business",
      "url": "https://consumer.ftc.gov/articles/solving-problems-business-returns-refunds-and-other-resolutions"
    }
  },
  {
    "slug": "eva28-variant-image-mismatch",
    "title": "Review Variant Image Mismatches Before Publish",
    "description": "A practical ecommerce operations guide to the variant image mismatch, focused on checking that the selected option and the approved image describe the same item, with a named source, a bounded queue, and a close condition.",
    "category": "Ecommerce operations",
    "publishedAt": "2026-10-28",
    "readTime": "5 min read",
    "thumbnail": "/daily28/ecommercevirtualassistant/eva28-variant-image-mismatch.png",
    "sections": [
      {
        "heading": "Why this ecommerce control matters",
        "paragraphs": [
          "An ecommerce team can mark the variant image mismatch complete while the next specialist still cannot see which source was checked, which customer promise was made, or who owns the next step. The control exists to make that chain visible before a campaign, a refund, or a warehouse handoff depends on it.",
          "The failure is usually small and expensive: a feed field copied from last season, a backorder notice with an invented date, or a return label counted as a received parcel. Each gap creates a customer contact that could have been prevented with one recorded source."
        ]
      },
      {
        "heading": "Start with the governing record",
        "paragraphs": [
          "Open the variant image mismatch at the system that owns the fact, not at the latest campaign note. Record the SKU or order reference, the source field, the version observed, the channel, the time, and the person who can confirm it.",
          "Keep the observation separate from the specialist interpretation. When the product record, marketplace listing, and customer message disagree, preserve all three and label the conflict. A clean summary that hides the disagreement is not evidence."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "The specialist may collect, compare, label, draft, and route the variant image mismatch. the ecommerce operations owner decides whether an exception changes a price, a customer promise, a refund, access, or a compliance position. Write that boundary into the task brief before the work starts.",
          "A complete packet is not an approval. A drafted notice, a proposed price, or a recommended refund still needs the named owner when policy or risk is involved. The specialist should stop when the source is missing, the records conflict, or the request exceeds the written scope."
        ]
      },
      {
        "heading": "Build the daily routine",
        "paragraphs": [
          "Each day, review the variant image mismatch queue, confirm the latest source, record the exception, and leave a next action with an owner and a time. Use the same fields so a reviewer can compare one order with another without reading the whole thread.",
          "Keep the queue separate from general inbox work. Measure the age of the oldest open item, the number waiting on a warehouse event, and the number waiting on an owner decision. An average alone hides the case that has waited longest."
        ]
      },
      {
        "heading": "Handle exceptions before they age",
        "paragraphs": [
          "Use a short reason set for the variant image mismatch: missing source, wrong SKU, stale inventory, conflicting carrier event, price mismatch, fraud review, and customer accommodation. The reason should describe the evidence problem, not the person who found it.",
          "When an exception touches payment data, a pre-order promise, a refund, or a marketplace penalty, pause the dependent action and route it. Urgency does not create approval. Record the owner, the compensating check, and the date the exception expires."
        ]
      },
      {
        "heading": "Verify the close, not the activity",
        "paragraphs": [
          "Close the variant image mismatch only when the destination system shows the result. A label marked generated is not a received return, a notice marked sent is not a customer who understood the new date, and a feed marked uploaded is not a live listing that matches the catalog.",
          "At the end of the day, explain the carryover instead of silently moving it forward. Review a small sample each week and compare the source, the customer message, the order event, and the confirmation. A repeated gap usually means the template or the rule needs repair."
        ]
      },
      {
        "heading": "What the specialist prepares and what the owner decides",
        "paragraphs": [
          "For checking that the selected option and the approved image describe the same item, the specialist makes the decision ready: the source, the options, the customer impact, and the consequence of waiting. the ecommerce operations owner chooses the path and remains accountable for the price, promise, refund, or policy exception.",
          "Write the boundary in plain language beside the queue. A rule that exists only in onboarding disappears during a peak. Test it on one routine order, one exception, and one unresolved case before the specialist works independently."
        ]
      },
      {
        "heading": "A weekly review that changes one thing",
        "paragraphs": [
          "Hold one short weekly review of the variant image mismatch: the oldest item, the most repeated exception, and one case that was corrected. End with one process change, one owner, and one date to check whether the change worked. For review variant image mismatches before publish, the review lead keeps a 4-case snapshot from the 2026-10-28 order export and notes the exact SKU or order reference changed.",
          "Use the same sample rule each week. A stable sample shows movement; a fresh convenience sample shows only that someone looked. Keep the source link and the customer confirmation with the record so a second reviewer can repeat the check.",
          "Record what would reopen the variant image mismatch: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the variant image mismatch: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the variant image mismatch: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the variant image mismatch: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should the team check in the variant image mismatch workflow?",
        "a": "Open the variant image mismatch at the system that owns the fact, not at the latest campaign note. Record the SKU or order reference, the source field, the version observed, the channel, the time, and the person who can confirm it."
      },
      {
        "q": "Who approves an exception?",
        "a": "The named ecommerce operations owner approves changes to price, refunds, customer promises, access, or a policy exception."
      }
    ],
    "internalService": "/services/ecommerce-support",
    "internalSibling": "/blog",
    "source": {
      "label": "WCAG 2.2",
      "url": "https://www.w3.org/TR/WCAG22/"
    }
  },
  {
    "slug": "eva28-marketplace-price-approval",
    "title": "Set a Marketplace Price Change Approval Boundary",
    "description": "A practical ecommerce operations guide to the marketplace price change, focused on keeping a repricing suggestion separate from an authorised price, with a named source, a bounded queue, and a close condition.",
    "category": "Ecommerce operations",
    "publishedAt": "2026-10-28",
    "readTime": "5 min read",
    "thumbnail": "/daily28/ecommercevirtualassistant/eva28-marketplace-price-approval.png",
    "sections": [
      {
        "heading": "Why this ecommerce control matters",
        "paragraphs": [
          "An ecommerce team can mark the marketplace price change complete while the next specialist still cannot see which source was checked, which customer promise was made, or who owns the next step. The control exists to make that chain visible before a campaign, a refund, or a warehouse handoff depends on it.",
          "The failure is usually small and expensive: a feed field copied from last season, a backorder notice with an invented date, or a return label counted as a received parcel. Each gap creates a customer contact that could have been prevented with one recorded source."
        ]
      },
      {
        "heading": "Start with the governing record",
        "paragraphs": [
          "Open the marketplace price change at the system that owns the fact, not at the latest campaign note. Record the SKU or order reference, the source field, the version observed, the channel, the time, and the person who can confirm it.",
          "Keep the observation separate from the specialist interpretation. When the product record, marketplace listing, and customer message disagree, preserve all three and label the conflict. A clean summary that hides the disagreement is not evidence."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "The specialist may collect, compare, label, draft, and route the marketplace price change. the ecommerce operations owner decides whether an exception changes a price, a customer promise, a refund, access, or a compliance position. Write that boundary into the task brief before the work starts.",
          "A complete packet is not an approval. A drafted notice, a proposed price, or a recommended refund still needs the named owner when policy or risk is involved. The specialist should stop when the source is missing, the records conflict, or the request exceeds the written scope."
        ]
      },
      {
        "heading": "Build the daily routine",
        "paragraphs": [
          "Each day, review the marketplace price change queue, confirm the latest source, record the exception, and leave a next action with an owner and a time. Use the same fields so a reviewer can compare one order with another without reading the whole thread.",
          "Keep the queue separate from general inbox work. Measure the age of the oldest open item, the number waiting on a warehouse event, and the number waiting on an owner decision. An average alone hides the case that has waited longest."
        ]
      },
      {
        "heading": "Handle exceptions before they age",
        "paragraphs": [
          "Use a short reason set for the marketplace price change: missing source, wrong SKU, stale inventory, conflicting carrier event, price mismatch, fraud review, and customer accommodation. The reason should describe the evidence problem, not the person who found it.",
          "When an exception touches payment data, a pre-order promise, a refund, or a marketplace penalty, pause the dependent action and route it. Urgency does not create approval. Record the owner, the compensating check, and the date the exception expires."
        ]
      },
      {
        "heading": "Verify the close, not the activity",
        "paragraphs": [
          "Close the marketplace price change only when the destination system shows the result. A label marked generated is not a received return, a notice marked sent is not a customer who understood the new date, and a feed marked uploaded is not a live listing that matches the catalog.",
          "At the end of the day, explain the carryover instead of silently moving it forward. Review a small sample each week and compare the source, the customer message, the order event, and the confirmation. A repeated gap usually means the template or the rule needs repair."
        ]
      },
      {
        "heading": "What the specialist prepares and what the owner decides",
        "paragraphs": [
          "For keeping a repricing suggestion separate from an authorised price, the specialist makes the decision ready: the source, the options, the customer impact, and the consequence of waiting. the ecommerce operations owner chooses the path and remains accountable for the price, promise, refund, or policy exception.",
          "Write the boundary in plain language beside the queue. A rule that exists only in onboarding disappears during a peak. Test it on one routine order, one exception, and one unresolved case before the specialist works independently."
        ]
      },
      {
        "heading": "A weekly review that changes one thing",
        "paragraphs": [
          "Hold one short weekly review of the marketplace price change: the oldest item, the most repeated exception, and one case that was corrected. End with one process change, one owner, and one date to check whether the change worked. For set a marketplace price change approval boundary, the review lead keeps a 5-case snapshot from the 2026-10-28 order export and notes the exact SKU or order reference changed.",
          "Use the same sample rule each week. A stable sample shows movement; a fresh convenience sample shows only that someone looked. Keep the source link and the customer confirmation with the record so a second reviewer can repeat the check.",
          "Record what would reopen the marketplace price change: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the marketplace price change: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the marketplace price change: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the marketplace price change: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should the team check in the marketplace price change workflow?",
        "a": "Open the marketplace price change at the system that owns the fact, not at the latest campaign note. Record the SKU or order reference, the source field, the version observed, the channel, the time, and the person who can confirm it."
      },
      {
        "q": "Who approves an exception?",
        "a": "The named ecommerce operations owner approves changes to price, refunds, customer promises, access, or a policy exception."
      }
    ],
    "internalService": "/services/ecommerce-support",
    "internalSibling": "/blog",
    "source": {
      "label": "FTC Mail, Internet, or Telephone Order Merchandise Rule",
      "url": "https://www.ftc.gov/legal-library/browse/rules/mail-internet-or-telephone-order-merchandise-rule"
    }
  },
  {
    "slug": "eva28-lost-package-claim",
    "title": "Trace a Lost Package Claim Without Guessing",
    "description": "A practical ecommerce operations guide to the lost package claim, focused on recording carrier events and customer statements without declaring liability, with a named source, a bounded queue, and a close condition.",
    "category": "Ecommerce operations",
    "publishedAt": "2026-10-28",
    "readTime": "5 min read",
    "thumbnail": "/daily28/ecommercevirtualassistant/eva28-lost-package-claim.png",
    "sections": [
      {
        "heading": "Why this ecommerce control matters",
        "paragraphs": [
          "An ecommerce team can mark the lost package claim complete while the next specialist still cannot see which source was checked, which customer promise was made, or who owns the next step. The control exists to make that chain visible before a campaign, a refund, or a warehouse handoff depends on it.",
          "The failure is usually small and expensive: a feed field copied from last season, a backorder notice with an invented date, or a return label counted as a received parcel. Each gap creates a customer contact that could have been prevented with one recorded source."
        ]
      },
      {
        "heading": "Start with the governing record",
        "paragraphs": [
          "Open the lost package claim at the system that owns the fact, not at the latest campaign note. Record the SKU or order reference, the source field, the version observed, the channel, the time, and the person who can confirm it.",
          "Keep the observation separate from the specialist interpretation. When the product record, marketplace listing, and customer message disagree, preserve all three and label the conflict. A clean summary that hides the disagreement is not evidence."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "The specialist may collect, compare, label, draft, and route the lost package claim. the ecommerce operations owner decides whether an exception changes a price, a customer promise, a refund, access, or a compliance position. Write that boundary into the task brief before the work starts.",
          "A complete packet is not an approval. A drafted notice, a proposed price, or a recommended refund still needs the named owner when policy or risk is involved. The specialist should stop when the source is missing, the records conflict, or the request exceeds the written scope."
        ]
      },
      {
        "heading": "Build the daily routine",
        "paragraphs": [
          "Each day, review the lost package claim queue, confirm the latest source, record the exception, and leave a next action with an owner and a time. Use the same fields so a reviewer can compare one order with another without reading the whole thread.",
          "Keep the queue separate from general inbox work. Measure the age of the oldest open item, the number waiting on a warehouse event, and the number waiting on an owner decision. An average alone hides the case that has waited longest."
        ]
      },
      {
        "heading": "Handle exceptions before they age",
        "paragraphs": [
          "Use a short reason set for the lost package claim: missing source, wrong SKU, stale inventory, conflicting carrier event, price mismatch, fraud review, and customer accommodation. The reason should describe the evidence problem, not the person who found it.",
          "When an exception touches payment data, a pre-order promise, a refund, or a marketplace penalty, pause the dependent action and route it. Urgency does not create approval. Record the owner, the compensating check, and the date the exception expires."
        ]
      },
      {
        "heading": "Verify the close, not the activity",
        "paragraphs": [
          "Close the lost package claim only when the destination system shows the result. A label marked generated is not a received return, a notice marked sent is not a customer who understood the new date, and a feed marked uploaded is not a live listing that matches the catalog.",
          "At the end of the day, explain the carryover instead of silently moving it forward. Review a small sample each week and compare the source, the customer message, the order event, and the confirmation. A repeated gap usually means the template or the rule needs repair."
        ]
      },
      {
        "heading": "What the specialist prepares and what the owner decides",
        "paragraphs": [
          "For recording carrier events and customer statements without declaring liability, the specialist makes the decision ready: the source, the options, the customer impact, and the consequence of waiting. the ecommerce operations owner chooses the path and remains accountable for the price, promise, refund, or policy exception.",
          "Write the boundary in plain language beside the queue. A rule that exists only in onboarding disappears during a peak. Test it on one routine order, one exception, and one unresolved case before the specialist works independently."
        ]
      },
      {
        "heading": "A weekly review that changes one thing",
        "paragraphs": [
          "Hold one short weekly review of the lost package claim: the oldest item, the most repeated exception, and one case that was corrected. End with one process change, one owner, and one date to check whether the change worked. For trace a lost package claim without guessing, the review lead keeps a 6-case snapshot from the 2026-10-28 order export and notes the exact SKU or order reference changed.",
          "Use the same sample rule each week. A stable sample shows movement; a fresh convenience sample shows only that someone looked. Keep the source link and the customer confirmation with the record so a second reviewer can repeat the check.",
          "Record what would reopen the lost package claim: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the lost package claim: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the lost package claim: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the lost package claim: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should the team check in the lost package claim workflow?",
        "a": "Open the lost package claim at the system that owns the fact, not at the latest campaign note. Record the SKU or order reference, the source field, the version observed, the channel, the time, and the person who can confirm it."
      },
      {
        "q": "Who approves an exception?",
        "a": "The named ecommerce operations owner approves changes to price, refunds, customer promises, access, or a policy exception."
      }
    ],
    "internalService": "/services/ecommerce-support",
    "internalSibling": "/blog",
    "source": {
      "label": "FTC, Solving Problems With a Business",
      "url": "https://consumer.ftc.gov/articles/solving-problems-business-returns-refunds-and-other-resolutions"
    }
  },
  {
    "slug": "eva28-duplicate-sku-cleanup",
    "title": "Clean Duplicate SKUs After a Catalog Migration",
    "description": "A practical ecommerce operations guide to the duplicate SKU cleanup, focused on preserving order and return history while merging a duplicated item, with a named source, a bounded queue, and a close condition.",
    "category": "Ecommerce operations",
    "publishedAt": "2026-10-28",
    "readTime": "5 min read",
    "thumbnail": "/daily28/ecommercevirtualassistant/eva28-duplicate-sku-cleanup.png",
    "sections": [
      {
        "heading": "Why this ecommerce control matters",
        "paragraphs": [
          "An ecommerce team can mark the duplicate SKU cleanup complete while the next specialist still cannot see which source was checked, which customer promise was made, or who owns the next step. The control exists to make that chain visible before a campaign, a refund, or a warehouse handoff depends on it.",
          "The failure is usually small and expensive: a feed field copied from last season, a backorder notice with an invented date, or a return label counted as a received parcel. Each gap creates a customer contact that could have been prevented with one recorded source."
        ]
      },
      {
        "heading": "Start with the governing record",
        "paragraphs": [
          "Open the duplicate SKU cleanup at the system that owns the fact, not at the latest campaign note. Record the SKU or order reference, the source field, the version observed, the channel, the time, and the person who can confirm it.",
          "Keep the observation separate from the specialist interpretation. When the product record, marketplace listing, and customer message disagree, preserve all three and label the conflict. A clean summary that hides the disagreement is not evidence."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "The specialist may collect, compare, label, draft, and route the duplicate SKU cleanup. the ecommerce operations owner decides whether an exception changes a price, a customer promise, a refund, access, or a compliance position. Write that boundary into the task brief before the work starts.",
          "A complete packet is not an approval. A drafted notice, a proposed price, or a recommended refund still needs the named owner when policy or risk is involved. The specialist should stop when the source is missing, the records conflict, or the request exceeds the written scope."
        ]
      },
      {
        "heading": "Build the daily routine",
        "paragraphs": [
          "Each day, review the duplicate SKU cleanup queue, confirm the latest source, record the exception, and leave a next action with an owner and a time. Use the same fields so a reviewer can compare one order with another without reading the whole thread.",
          "Keep the queue separate from general inbox work. Measure the age of the oldest open item, the number waiting on a warehouse event, and the number waiting on an owner decision. An average alone hides the case that has waited longest."
        ]
      },
      {
        "heading": "Handle exceptions before they age",
        "paragraphs": [
          "Use a short reason set for the duplicate SKU cleanup: missing source, wrong SKU, stale inventory, conflicting carrier event, price mismatch, fraud review, and customer accommodation. The reason should describe the evidence problem, not the person who found it.",
          "When an exception touches payment data, a pre-order promise, a refund, or a marketplace penalty, pause the dependent action and route it. Urgency does not create approval. Record the owner, the compensating check, and the date the exception expires."
        ]
      },
      {
        "heading": "Verify the close, not the activity",
        "paragraphs": [
          "Close the duplicate SKU cleanup only when the destination system shows the result. A label marked generated is not a received return, a notice marked sent is not a customer who understood the new date, and a feed marked uploaded is not a live listing that matches the catalog.",
          "At the end of the day, explain the carryover instead of silently moving it forward. Review a small sample each week and compare the source, the customer message, the order event, and the confirmation. A repeated gap usually means the template or the rule needs repair."
        ]
      },
      {
        "heading": "What the specialist prepares and what the owner decides",
        "paragraphs": [
          "For preserving order and return history while merging a duplicated item, the specialist makes the decision ready: the source, the options, the customer impact, and the consequence of waiting. the ecommerce operations owner chooses the path and remains accountable for the price, promise, refund, or policy exception.",
          "Write the boundary in plain language beside the queue. A rule that exists only in onboarding disappears during a peak. Test it on one routine order, one exception, and one unresolved case before the specialist works independently."
        ]
      },
      {
        "heading": "A weekly review that changes one thing",
        "paragraphs": [
          "Hold one short weekly review of the duplicate SKU cleanup: the oldest item, the most repeated exception, and one case that was corrected. End with one process change, one owner, and one date to check whether the change worked. For clean duplicate skus after a catalog migration, the review lead keeps a 7-case snapshot from the 2026-10-28 order export and notes the exact SKU or order reference changed.",
          "Use the same sample rule each week. A stable sample shows movement; a fresh convenience sample shows only that someone looked. Keep the source link and the customer confirmation with the record so a second reviewer can repeat the check.",
          "Record what would reopen the duplicate SKU cleanup: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the duplicate SKU cleanup: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the duplicate SKU cleanup: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the duplicate SKU cleanup: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should the team check in the duplicate SKU cleanup workflow?",
        "a": "Open the duplicate SKU cleanup at the system that owns the fact, not at the latest campaign note. Record the SKU or order reference, the source field, the version observed, the channel, the time, and the person who can confirm it."
      },
      {
        "q": "Who approves an exception?",
        "a": "The named ecommerce operations owner approves changes to price, refunds, customer promises, access, or a policy exception."
      }
    ],
    "internalService": "/services/ecommerce-support",
    "internalSibling": "/blog",
    "source": {
      "label": "NARA Records Management",
      "url": "https://www.archives.gov/records-mgmt/policy"
    }
  },
  {
    "slug": "eva28-preorder-date-change",
    "title": "Write a Pre-Order Date-Change Notice",
    "description": "A practical ecommerce operations guide to the pre-order date change, focused on updating a customer promise when the supplier date moves, with a named source, a bounded queue, and a close condition.",
    "category": "Ecommerce operations",
    "publishedAt": "2026-10-28",
    "readTime": "5 min read",
    "thumbnail": "/daily28/ecommercevirtualassistant/eva28-preorder-date-change.png",
    "sections": [
      {
        "heading": "Why this ecommerce control matters",
        "paragraphs": [
          "An ecommerce team can mark the pre-order date change complete while the next specialist still cannot see which source was checked, which customer promise was made, or who owns the next step. The control exists to make that chain visible before a campaign, a refund, or a warehouse handoff depends on it.",
          "The failure is usually small and expensive: a feed field copied from last season, a backorder notice with an invented date, or a return label counted as a received parcel. Each gap creates a customer contact that could have been prevented with one recorded source."
        ]
      },
      {
        "heading": "Start with the governing record",
        "paragraphs": [
          "Open the pre-order date change at the system that owns the fact, not at the latest campaign note. Record the SKU or order reference, the source field, the version observed, the channel, the time, and the person who can confirm it.",
          "Keep the observation separate from the specialist interpretation. When the product record, marketplace listing, and customer message disagree, preserve all three and label the conflict. A clean summary that hides the disagreement is not evidence."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "The specialist may collect, compare, label, draft, and route the pre-order date change. the ecommerce operations owner decides whether an exception changes a price, a customer promise, a refund, access, or a compliance position. Write that boundary into the task brief before the work starts.",
          "A complete packet is not an approval. A drafted notice, a proposed price, or a recommended refund still needs the named owner when policy or risk is involved. The specialist should stop when the source is missing, the records conflict, or the request exceeds the written scope."
        ]
      },
      {
        "heading": "Build the daily routine",
        "paragraphs": [
          "Each day, review the pre-order date change queue, confirm the latest source, record the exception, and leave a next action with an owner and a time. Use the same fields so a reviewer can compare one order with another without reading the whole thread.",
          "Keep the queue separate from general inbox work. Measure the age of the oldest open item, the number waiting on a warehouse event, and the number waiting on an owner decision. An average alone hides the case that has waited longest."
        ]
      },
      {
        "heading": "Handle exceptions before they age",
        "paragraphs": [
          "Use a short reason set for the pre-order date change: missing source, wrong SKU, stale inventory, conflicting carrier event, price mismatch, fraud review, and customer accommodation. The reason should describe the evidence problem, not the person who found it.",
          "When an exception touches payment data, a pre-order promise, a refund, or a marketplace penalty, pause the dependent action and route it. Urgency does not create approval. Record the owner, the compensating check, and the date the exception expires."
        ]
      },
      {
        "heading": "Verify the close, not the activity",
        "paragraphs": [
          "Close the pre-order date change only when the destination system shows the result. A label marked generated is not a received return, a notice marked sent is not a customer who understood the new date, and a feed marked uploaded is not a live listing that matches the catalog.",
          "At the end of the day, explain the carryover instead of silently moving it forward. Review a small sample each week and compare the source, the customer message, the order event, and the confirmation. A repeated gap usually means the template or the rule needs repair."
        ]
      },
      {
        "heading": "What the specialist prepares and what the owner decides",
        "paragraphs": [
          "For updating a customer promise when the supplier date moves, the specialist makes the decision ready: the source, the options, the customer impact, and the consequence of waiting. the ecommerce operations owner chooses the path and remains accountable for the price, promise, refund, or policy exception.",
          "Write the boundary in plain language beside the queue. A rule that exists only in onboarding disappears during a peak. Test it on one routine order, one exception, and one unresolved case before the specialist works independently."
        ]
      },
      {
        "heading": "A weekly review that changes one thing",
        "paragraphs": [
          "Hold one short weekly review of the pre-order date change: the oldest item, the most repeated exception, and one case that was corrected. End with one process change, one owner, and one date to check whether the change worked. For write a pre-order date-change notice, the review lead keeps a 8-case snapshot from the 2026-10-28 order export and notes the exact SKU or order reference changed.",
          "Use the same sample rule each week. A stable sample shows movement; a fresh convenience sample shows only that someone looked. Keep the source link and the customer confirmation with the record so a second reviewer can repeat the check.",
          "Record what would reopen the pre-order date change: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the pre-order date change: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the pre-order date change: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should the team check in the pre-order date change workflow?",
        "a": "Open the pre-order date change at the system that owns the fact, not at the latest campaign note. Record the SKU or order reference, the source field, the version observed, the channel, the time, and the person who can confirm it."
      },
      {
        "q": "Who approves an exception?",
        "a": "The named ecommerce operations owner approves changes to price, refunds, customer promises, access, or a policy exception."
      }
    ],
    "internalService": "/services/ecommerce-support",
    "internalSibling": "/blog",
    "source": {
      "label": "FTC Mail, Internet, or Telephone Order Merchandise Rule",
      "url": "https://www.ftc.gov/legal-library/browse/rules/mail-internet-or-telephone-order-merchandise-rule"
    }
  },
  {
    "slug": "eva28-gift-card-balance-exception",
    "title": "Check Gift Card Balance Exceptions at Checkout",
    "description": "A practical ecommerce operations guide to the gift card balance exception, focused on routing a balance conflict without exposing redemption or fraud controls, with a named source, a bounded queue, and a close condition.",
    "category": "Ecommerce operations",
    "publishedAt": "2026-10-28",
    "readTime": "5 min read",
    "thumbnail": "/daily28/ecommercevirtualassistant/eva28-gift-card-balance-exception.png",
    "sections": [
      {
        "heading": "Why this ecommerce control matters",
        "paragraphs": [
          "An ecommerce team can mark the gift card balance exception complete while the next specialist still cannot see which source was checked, which customer promise was made, or who owns the next step. The control exists to make that chain visible before a campaign, a refund, or a warehouse handoff depends on it.",
          "The failure is usually small and expensive: a feed field copied from last season, a backorder notice with an invented date, or a return label counted as a received parcel. Each gap creates a customer contact that could have been prevented with one recorded source."
        ]
      },
      {
        "heading": "Start with the governing record",
        "paragraphs": [
          "Open the gift card balance exception at the system that owns the fact, not at the latest campaign note. Record the SKU or order reference, the source field, the version observed, the channel, the time, and the person who can confirm it.",
          "Keep the observation separate from the specialist interpretation. When the product record, marketplace listing, and customer message disagree, preserve all three and label the conflict. A clean summary that hides the disagreement is not evidence."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "The specialist may collect, compare, label, draft, and route the gift card balance exception. the ecommerce operations owner decides whether an exception changes a price, a customer promise, a refund, access, or a compliance position. Write that boundary into the task brief before the work starts.",
          "A complete packet is not an approval. A drafted notice, a proposed price, or a recommended refund still needs the named owner when policy or risk is involved. The specialist should stop when the source is missing, the records conflict, or the request exceeds the written scope."
        ]
      },
      {
        "heading": "Build the daily routine",
        "paragraphs": [
          "Each day, review the gift card balance exception queue, confirm the latest source, record the exception, and leave a next action with an owner and a time. Use the same fields so a reviewer can compare one order with another without reading the whole thread.",
          "Keep the queue separate from general inbox work. Measure the age of the oldest open item, the number waiting on a warehouse event, and the number waiting on an owner decision. An average alone hides the case that has waited longest."
        ]
      },
      {
        "heading": "Handle exceptions before they age",
        "paragraphs": [
          "Use a short reason set for the gift card balance exception: missing source, wrong SKU, stale inventory, conflicting carrier event, price mismatch, fraud review, and customer accommodation. The reason should describe the evidence problem, not the person who found it.",
          "When an exception touches payment data, a pre-order promise, a refund, or a marketplace penalty, pause the dependent action and route it. Urgency does not create approval. Record the owner, the compensating check, and the date the exception expires."
        ]
      },
      {
        "heading": "Verify the close, not the activity",
        "paragraphs": [
          "Close the gift card balance exception only when the destination system shows the result. A label marked generated is not a received return, a notice marked sent is not a customer who understood the new date, and a feed marked uploaded is not a live listing that matches the catalog.",
          "At the end of the day, explain the carryover instead of silently moving it forward. Review a small sample each week and compare the source, the customer message, the order event, and the confirmation. A repeated gap usually means the template or the rule needs repair."
        ]
      },
      {
        "heading": "What the specialist prepares and what the owner decides",
        "paragraphs": [
          "For routing a balance conflict without exposing redemption or fraud controls, the specialist makes the decision ready: the source, the options, the customer impact, and the consequence of waiting. the ecommerce operations owner chooses the path and remains accountable for the price, promise, refund, or policy exception.",
          "Write the boundary in plain language beside the queue. A rule that exists only in onboarding disappears during a peak. Test it on one routine order, one exception, and one unresolved case before the specialist works independently."
        ]
      },
      {
        "heading": "A weekly review that changes one thing",
        "paragraphs": [
          "Hold one short weekly review of the gift card balance exception: the oldest item, the most repeated exception, and one case that was corrected. End with one process change, one owner, and one date to check whether the change worked. For check gift card balance exceptions at checkout, the review lead keeps a 9-case snapshot from the 2026-10-28 order export and notes the exact SKU or order reference changed.",
          "Use the same sample rule each week. A stable sample shows movement; a fresh convenience sample shows only that someone looked. Keep the source link and the customer confirmation with the record so a second reviewer can repeat the check.",
          "Record what would reopen the gift card balance exception: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the gift card balance exception: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the gift card balance exception: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should the team check in the gift card balance exception workflow?",
        "a": "Open the gift card balance exception at the system that owns the fact, not at the latest campaign note. Record the SKU or order reference, the source field, the version observed, the channel, the time, and the person who can confirm it."
      },
      {
        "q": "Who approves an exception?",
        "a": "The named ecommerce operations owner approves changes to price, refunds, customer promises, access, or a policy exception."
      }
    ],
    "internalService": "/services/ecommerce-support",
    "internalSibling": "/blog",
    "source": {
      "label": "PCI Data Security Standard",
      "url": "https://www.pcisecuritystandards.org/standards/pci-dss/"
    }
  },
  {
    "slug": "eva28-subscription-cancel-save",
    "title": "Review Subscription Cancellation Saves Against Policy",
    "description": "A practical ecommerce operations guide to the subscription cancellation save, focused on separating a retention offer from an unauthorised charge or plan change, with a named source, a bounded queue, and a close condition.",
    "category": "Ecommerce operations",
    "publishedAt": "2026-10-28",
    "readTime": "5 min read",
    "thumbnail": "/daily28/ecommercevirtualassistant/eva28-subscription-cancel-save.png",
    "sections": [
      {
        "heading": "Why this ecommerce control matters",
        "paragraphs": [
          "An ecommerce team can mark the subscription cancellation save complete while the next specialist still cannot see which source was checked, which customer promise was made, or who owns the next step. The control exists to make that chain visible before a campaign, a refund, or a warehouse handoff depends on it.",
          "The failure is usually small and expensive: a feed field copied from last season, a backorder notice with an invented date, or a return label counted as a received parcel. Each gap creates a customer contact that could have been prevented with one recorded source."
        ]
      },
      {
        "heading": "Start with the governing record",
        "paragraphs": [
          "Open the subscription cancellation save at the system that owns the fact, not at the latest campaign note. Record the SKU or order reference, the source field, the version observed, the channel, the time, and the person who can confirm it.",
          "Keep the observation separate from the specialist interpretation. When the product record, marketplace listing, and customer message disagree, preserve all three and label the conflict. A clean summary that hides the disagreement is not evidence."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "The specialist may collect, compare, label, draft, and route the subscription cancellation save. the ecommerce operations owner decides whether an exception changes a price, a customer promise, a refund, access, or a compliance position. Write that boundary into the task brief before the work starts.",
          "A complete packet is not an approval. A drafted notice, a proposed price, or a recommended refund still needs the named owner when policy or risk is involved. The specialist should stop when the source is missing, the records conflict, or the request exceeds the written scope."
        ]
      },
      {
        "heading": "Build the daily routine",
        "paragraphs": [
          "Each day, review the subscription cancellation save queue, confirm the latest source, record the exception, and leave a next action with an owner and a time. Use the same fields so a reviewer can compare one order with another without reading the whole thread.",
          "Keep the queue separate from general inbox work. Measure the age of the oldest open item, the number waiting on a warehouse event, and the number waiting on an owner decision. An average alone hides the case that has waited longest."
        ]
      },
      {
        "heading": "Handle exceptions before they age",
        "paragraphs": [
          "Use a short reason set for the subscription cancellation save: missing source, wrong SKU, stale inventory, conflicting carrier event, price mismatch, fraud review, and customer accommodation. The reason should describe the evidence problem, not the person who found it.",
          "When an exception touches payment data, a pre-order promise, a refund, or a marketplace penalty, pause the dependent action and route it. Urgency does not create approval. Record the owner, the compensating check, and the date the exception expires."
        ]
      },
      {
        "heading": "Verify the close, not the activity",
        "paragraphs": [
          "Close the subscription cancellation save only when the destination system shows the result. A label marked generated is not a received return, a notice marked sent is not a customer who understood the new date, and a feed marked uploaded is not a live listing that matches the catalog.",
          "At the end of the day, explain the carryover instead of silently moving it forward. Review a small sample each week and compare the source, the customer message, the order event, and the confirmation. A repeated gap usually means the template or the rule needs repair."
        ]
      },
      {
        "heading": "What the specialist prepares and what the owner decides",
        "paragraphs": [
          "For separating a retention offer from an unauthorised charge or plan change, the specialist makes the decision ready: the source, the options, the customer impact, and the consequence of waiting. the ecommerce operations owner chooses the path and remains accountable for the price, promise, refund, or policy exception.",
          "Write the boundary in plain language beside the queue. A rule that exists only in onboarding disappears during a peak. Test it on one routine order, one exception, and one unresolved case before the specialist works independently."
        ]
      },
      {
        "heading": "A weekly review that changes one thing",
        "paragraphs": [
          "Hold one short weekly review of the subscription cancellation save: the oldest item, the most repeated exception, and one case that was corrected. End with one process change, one owner, and one date to check whether the change worked. For review subscription cancellation saves against policy, the review lead keeps a 10-case snapshot from the 2026-10-28 order export and notes the exact SKU or order reference changed.",
          "Use the same sample rule each week. A stable sample shows movement; a fresh convenience sample shows only that someone looked. Keep the source link and the customer confirmation with the record so a second reviewer can repeat the check.",
          "Record what would reopen the subscription cancellation save: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the subscription cancellation save: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the subscription cancellation save: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the subscription cancellation save: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should the team check in the subscription cancellation save workflow?",
        "a": "Open the subscription cancellation save at the system that owns the fact, not at the latest campaign note. Record the SKU or order reference, the source field, the version observed, the channel, the time, and the person who can confirm it."
      },
      {
        "q": "Who approves an exception?",
        "a": "The named ecommerce operations owner approves changes to price, refunds, customer promises, access, or a policy exception."
      }
    ],
    "internalService": "/services/ecommerce-support",
    "internalSibling": "/blog",
    "source": {
      "label": "Consumer Financial Protection Bureau",
      "url": "https://www.consumerfinance.gov/"
    }
  },
  {
    "slug": "eva28-fraud-hold-message",
    "title": "Handle a Fraud Hold Message Without Exposing Risk Rules",
    "description": "A practical ecommerce operations guide to the fraud hold message, focused on telling the customer what to do next without revealing the detection rule, with a named source, a bounded queue, and a close condition.",
    "category": "Ecommerce operations",
    "publishedAt": "2026-10-28",
    "readTime": "5 min read",
    "thumbnail": "/daily28/ecommercevirtualassistant/eva28-fraud-hold-message.png",
    "sections": [
      {
        "heading": "Why this ecommerce control matters",
        "paragraphs": [
          "An ecommerce team can mark the fraud hold message complete while the next specialist still cannot see which source was checked, which customer promise was made, or who owns the next step. The control exists to make that chain visible before a campaign, a refund, or a warehouse handoff depends on it.",
          "The failure is usually small and expensive: a feed field copied from last season, a backorder notice with an invented date, or a return label counted as a received parcel. Each gap creates a customer contact that could have been prevented with one recorded source."
        ]
      },
      {
        "heading": "Start with the governing record",
        "paragraphs": [
          "Open the fraud hold message at the system that owns the fact, not at the latest campaign note. Record the SKU or order reference, the source field, the version observed, the channel, the time, and the person who can confirm it.",
          "Keep the observation separate from the specialist interpretation. When the product record, marketplace listing, and customer message disagree, preserve all three and label the conflict. A clean summary that hides the disagreement is not evidence."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "The specialist may collect, compare, label, draft, and route the fraud hold message. the ecommerce operations owner decides whether an exception changes a price, a customer promise, a refund, access, or a compliance position. Write that boundary into the task brief before the work starts.",
          "A complete packet is not an approval. A drafted notice, a proposed price, or a recommended refund still needs the named owner when policy or risk is involved. The specialist should stop when the source is missing, the records conflict, or the request exceeds the written scope."
        ]
      },
      {
        "heading": "Build the daily routine",
        "paragraphs": [
          "Each day, review the fraud hold message queue, confirm the latest source, record the exception, and leave a next action with an owner and a time. Use the same fields so a reviewer can compare one order with another without reading the whole thread.",
          "Keep the queue separate from general inbox work. Measure the age of the oldest open item, the number waiting on a warehouse event, and the number waiting on an owner decision. An average alone hides the case that has waited longest."
        ]
      },
      {
        "heading": "Handle exceptions before they age",
        "paragraphs": [
          "Use a short reason set for the fraud hold message: missing source, wrong SKU, stale inventory, conflicting carrier event, price mismatch, fraud review, and customer accommodation. The reason should describe the evidence problem, not the person who found it.",
          "When an exception touches payment data, a pre-order promise, a refund, or a marketplace penalty, pause the dependent action and route it. Urgency does not create approval. Record the owner, the compensating check, and the date the exception expires."
        ]
      },
      {
        "heading": "Verify the close, not the activity",
        "paragraphs": [
          "Close the fraud hold message only when the destination system shows the result. A label marked generated is not a received return, a notice marked sent is not a customer who understood the new date, and a feed marked uploaded is not a live listing that matches the catalog.",
          "At the end of the day, explain the carryover instead of silently moving it forward. Review a small sample each week and compare the source, the customer message, the order event, and the confirmation. A repeated gap usually means the template or the rule needs repair."
        ]
      },
      {
        "heading": "What the specialist prepares and what the owner decides",
        "paragraphs": [
          "For telling the customer what to do next without revealing the detection rule, the specialist makes the decision ready: the source, the options, the customer impact, and the consequence of waiting. the ecommerce operations owner chooses the path and remains accountable for the price, promise, refund, or policy exception.",
          "Write the boundary in plain language beside the queue. A rule that exists only in onboarding disappears during a peak. Test it on one routine order, one exception, and one unresolved case before the specialist works independently."
        ]
      },
      {
        "heading": "A weekly review that changes one thing",
        "paragraphs": [
          "Hold one short weekly review of the fraud hold message: the oldest item, the most repeated exception, and one case that was corrected. End with one process change, one owner, and one date to check whether the change worked. For handle a fraud hold message without exposing risk rules, the review lead keeps a 11-case snapshot from the 2026-10-28 order export and notes the exact SKU or order reference changed.",
          "Use the same sample rule each week. A stable sample shows movement; a fresh convenience sample shows only that someone looked. Keep the source link and the customer confirmation with the record so a second reviewer can repeat the check.",
          "Record what would reopen the fraud hold message: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the fraud hold message: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the fraud hold message: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the fraud hold message: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should the team check in the fraud hold message workflow?",
        "a": "Open the fraud hold message at the system that owns the fact, not at the latest campaign note. Record the SKU or order reference, the source field, the version observed, the channel, the time, and the person who can confirm it."
      },
      {
        "q": "Who approves an exception?",
        "a": "The named ecommerce operations owner approves changes to price, refunds, customer promises, access, or a policy exception."
      }
    ],
    "internalService": "/services/ecommerce-support",
    "internalSibling": "/blog",
    "source": {
      "label": "FTC, Protecting Personal Information",
      "url": "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business"
    }
  },
  {
    "slug": "eva28-warehouse-transfer-handoff",
    "title": "Test a Warehouse Transfer Handoff During Peak Volume",
    "description": "A practical ecommerce operations guide to the warehouse transfer handoff, focused on tracking a transfer between locations without losing the order commitment, with a named source, a bounded queue, and a close condition.",
    "category": "Ecommerce operations",
    "publishedAt": "2026-10-28",
    "readTime": "5 min read",
    "thumbnail": "/daily28/ecommercevirtualassistant/eva28-warehouse-transfer-handoff.png",
    "sections": [
      {
        "heading": "Why this ecommerce control matters",
        "paragraphs": [
          "An ecommerce team can mark the warehouse transfer handoff complete while the next specialist still cannot see which source was checked, which customer promise was made, or who owns the next step. The control exists to make that chain visible before a campaign, a refund, or a warehouse handoff depends on it.",
          "The failure is usually small and expensive: a feed field copied from last season, a backorder notice with an invented date, or a return label counted as a received parcel. Each gap creates a customer contact that could have been prevented with one recorded source."
        ]
      },
      {
        "heading": "Start with the governing record",
        "paragraphs": [
          "Open the warehouse transfer handoff at the system that owns the fact, not at the latest campaign note. Record the SKU or order reference, the source field, the version observed, the channel, the time, and the person who can confirm it.",
          "Keep the observation separate from the specialist interpretation. When the product record, marketplace listing, and customer message disagree, preserve all three and label the conflict. A clean summary that hides the disagreement is not evidence."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "The specialist may collect, compare, label, draft, and route the warehouse transfer handoff. the ecommerce operations owner decides whether an exception changes a price, a customer promise, a refund, access, or a compliance position. Write that boundary into the task brief before the work starts.",
          "A complete packet is not an approval. A drafted notice, a proposed price, or a recommended refund still needs the named owner when policy or risk is involved. The specialist should stop when the source is missing, the records conflict, or the request exceeds the written scope."
        ]
      },
      {
        "heading": "Build the daily routine",
        "paragraphs": [
          "Each day, review the warehouse transfer handoff queue, confirm the latest source, record the exception, and leave a next action with an owner and a time. Use the same fields so a reviewer can compare one order with another without reading the whole thread.",
          "Keep the queue separate from general inbox work. Measure the age of the oldest open item, the number waiting on a warehouse event, and the number waiting on an owner decision. An average alone hides the case that has waited longest."
        ]
      },
      {
        "heading": "Handle exceptions before they age",
        "paragraphs": [
          "Use a short reason set for the warehouse transfer handoff: missing source, wrong SKU, stale inventory, conflicting carrier event, price mismatch, fraud review, and customer accommodation. The reason should describe the evidence problem, not the person who found it.",
          "When an exception touches payment data, a pre-order promise, a refund, or a marketplace penalty, pause the dependent action and route it. Urgency does not create approval. Record the owner, the compensating check, and the date the exception expires."
        ]
      },
      {
        "heading": "Verify the close, not the activity",
        "paragraphs": [
          "Close the warehouse transfer handoff only when the destination system shows the result. A label marked generated is not a received return, a notice marked sent is not a customer who understood the new date, and a feed marked uploaded is not a live listing that matches the catalog.",
          "At the end of the day, explain the carryover instead of silently moving it forward. Review a small sample each week and compare the source, the customer message, the order event, and the confirmation. A repeated gap usually means the template or the rule needs repair."
        ]
      },
      {
        "heading": "What the specialist prepares and what the owner decides",
        "paragraphs": [
          "For tracking a transfer between locations without losing the order commitment, the specialist makes the decision ready: the source, the options, the customer impact, and the consequence of waiting. the ecommerce operations owner chooses the path and remains accountable for the price, promise, refund, or policy exception.",
          "Write the boundary in plain language beside the queue. A rule that exists only in onboarding disappears during a peak. Test it on one routine order, one exception, and one unresolved case before the specialist works independently."
        ]
      },
      {
        "heading": "A weekly review that changes one thing",
        "paragraphs": [
          "Hold one short weekly review of the warehouse transfer handoff: the oldest item, the most repeated exception, and one case that was corrected. End with one process change, one owner, and one date to check whether the change worked. For test a warehouse transfer handoff during peak volume, the review lead keeps a 12-case snapshot from the 2026-10-28 order export and notes the exact SKU or order reference changed.",
          "Use the same sample rule each week. A stable sample shows movement; a fresh convenience sample shows only that someone looked. Keep the source link and the customer confirmation with the record so a second reviewer can repeat the check.",
          "Record what would reopen the warehouse transfer handoff: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the warehouse transfer handoff: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the warehouse transfer handoff: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory.",
          "Check the destination, not only the activity. A notice marked sent, a return marked received, or a feed marked uploaded should be verified in the system that owns the result.",
          "Record what would reopen the warehouse transfer handoff: a customer reply, a carrier update, a corrected SKU, or a failed warehouse receipt. Leave that note with the item so the next reviewer starts from evidence rather than memory."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should the team check in the warehouse transfer handoff workflow?",
        "a": "Open the warehouse transfer handoff at the system that owns the fact, not at the latest campaign note. Record the SKU or order reference, the source field, the version observed, the channel, the time, and the person who can confirm it."
      },
      {
        "q": "Who approves an exception?",
        "a": "The named ecommerce operations owner approves changes to price, refunds, customer promises, access, or a policy exception."
      }
    ],
    "internalService": "/services/ecommerce-support",
    "internalSibling": "/blog",
    "source": {
      "label": "NARA Records Management",
      "url": "https://www.archives.gov/records-mgmt/policy"
    }
  }
];
