import type { BlogPost, ResearchPost } from './types';

export const blogPosts: BlogPost[] = [
  {
    "slug": "product-listing-qa-checklist",
    "title": "A Product Listing QA Checklist That Preserves Source Truth",
    "description": "A practical catalog review method for keeping approved attributes, assets, variants, and publication decisions traceable.",
    "category": "Catalog systems",
    "publishedAt": "2026-10-13",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-12/product-variant-source-of-truth.svg",
    "sections": [
      {
        "heading": "Begin with the source package",
        "paragraphs": [
          "A listing review should start before anyone opens the storefront editor. Gather the approved product record, image folder, variant map, channel template, and the name of the person who can resolve conflicts. Mark the version or effective date. A neat page built from an old spreadsheet is still wrong.",
          "Treat missing information as a visible queue. If dimensions, materials, compatibility, warnings, or usage rights are absent, do not fill the gap from a similar item. Record the missing field, source checked, and owner needed. This keeps preparation separate from product and compliance judgment."
        ]
      },
      {
        "heading": "Check identity before copy",
        "paragraphs": [
          "Confirm the SKU, parent-child relationship, option values, and channel identifier before polishing titles or descriptions. Variant errors often look small in a content review but can connect a customer to the wrong item, image, or warehouse record.",
          "Use exact matches for durable identifiers and a documented normalization rule for display names. If a retired alias still appears in open orders or returns, preserve that relationship until the catalog owner approves the merge or retirement."
        ]
      },
      {
        "heading": "Review claims and customer-facing detail",
        "paragraphs": [
          "Compare every factual statement with an approved source. Product benefits, safety language, environmental claims, warranties, certifications, and comparative statements need substantiation owned by the business. A support role can place approved language but should not create evidence by rewriting it.",
          "Read the page as a customer would. Confirm that the title, key attributes, variant label, image sequence, delivery context, and return-related details describe the same product. Flag ambiguity instead of smoothing it over."
        ]
      },
      {
        "heading": "Make visual and accessibility checks specific",
        "paragraphs": [
          "Verify that images belong to the selected variant, follow the approved order, and do not contain obsolete overlays or cropped instructions. Alternative text should identify useful product information without repeating nearby copy or stuffing keywords.",
          "Test the listing at mobile and desktop widths. Look for clipped option labels, controls that cannot be reached by keyboard, weak focus indicators, and information that appears only on hover. Record the page and viewport with each issue."
        ]
      },
      {
        "heading": "Close with a change record",
        "paragraphs": [
          "A completed QA record should show the item reviewed, source version, fields changed, unresolved exceptions, reviewer, and publication state. For bulk work, retain a sample that includes new items, changed variants, and known difficult categories.",
          "After publication, reopen the customer-facing page and compare it with the approved record. Imports and channel transformations can introduce defects after the draft looked correct. The final check should verify what customers can actually see."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can an assistant approve product claims?",
        "a": "No. The assistant can verify placement against approved source material; substantiation and approval stay with the accountable business owner."
      },
      {
        "q": "Should every listing receive the same review?",
        "a": "Use a common baseline, then add controls for categories with safety, regulatory, compatibility, or high-return risks."
      },
      {
        "q": "What is the smallest useful record?",
        "a": "SKU, source version, fields checked, exceptions, reviewer, and publication status."
      }
    ],
    "internalService": "/services/product-listing-support",
    "internalSibling": "/blog/order-exception-queue",
    "source": {
      "label": "FTC — Advertising and Marketing Basics",
      "url": "https://www.ftc.gov/business-guidance/advertising-marketing"
    }
  },
  {
    "slug": "order-exception-queue",
    "title": "Build an Order Exception Queue That Owners Can Act On",
    "description": "How to separate routine status work from payment, fraud, fulfillment, and customer decisions.",
    "category": "Order operations",
    "publishedAt": "2026-10-13",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-12/order-address-change-verification.svg",
    "sections": [
      {
        "heading": "Define an exception as a decision gap",
        "paragraphs": [
          "An exception is not every order that has been open for a certain number of hours. It is a record that cannot follow the normal path without missing evidence, a conflicting state, or a decision from a named owner. That definition prevents ordinary work from burying cases that need judgment.",
          "Write the normal path and the stop conditions side by side. Common stops include an unverified address change, a carrier event that conflicts with warehouse status, a payment hold, unavailable stock, and a requested remedy outside policy."
        ]
      },
      {
        "heading": "Build one compact case record",
        "paragraphs": [
          "A useful case record contains the order key, affected items, customer context, source events with timestamps, current fulfillment state, communication already sent, and the exact question the owner must decide. Link to systems rather than copying unnecessary personal data.",
          "Preserve event time and observation time separately. A status seen this morning may describe a carrier event from yesterday. Without both timestamps, the team can mistake delayed ingestion for delayed fulfillment."
        ]
      },
      {
        "heading": "Route by authority, not convenience",
        "paragraphs": [
          "Send payment and chargeback issues to the financial owner, inventory conflicts to the inventory or warehouse owner, policy exceptions to customer-care leadership, and suspicious identity changes to the approved security or fraud path. The assistant should not become the default owner simply because the queue is visible.",
          "Set an urgent path for deadlines or customer harm, and a standard path for cases that can wait for the next review. Every route needs an acknowledgment rule so work does not disappear after assignment."
        ]
      },
      {
        "heading": "Keep customer messages tied to evidence",
        "paragraphs": [
          "Use approved language that reflects what the systems actually confirm. Avoid inventing delivery dates, implying that a refund has settled when it was only initiated, or saying an item is reserved before the inventory owner confirms allocation.",
          "Record the version of the message sent and the event that supported it. If the underlying state changes, the follow-up queue should identify which customers need corrected information."
        ]
      },
      {
        "heading": "Review age, reopens, and incomplete evidence",
        "paragraphs": [
          "Volume alone says little about quality. Review how long exceptions wait for the right owner, how often records arrive without decisive evidence, and which categories reopen after an apparent close.",
          "Sample difficult cases as well as clean completions. Use the findings to improve source access, templates, routing rules, or the definition of done. The goal is fewer reconstructed histories, not a prettier dashboard."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can a support assistant change an address?",
        "a": "Only under a written verification and authority rule. Ambiguous, late, or suspicious changes should stop and escalate."
      },
      {
        "q": "Should the queue contain customer data?",
        "a": "Only the minimum needed for the purpose, with links to approved systems and access limited by role."
      },
      {
        "q": "When is a case complete?",
        "a": "When the approved action is visible, required communication has a delivery result, and the record names any remaining owner or follow-up."
      }
    ],
    "internalService": "/services/order-management",
    "internalSibling": "/blog/returns-handoff-record",
    "source": {
      "label": "FTC — Mail, Internet, or Telephone Order Merchandise Rule",
      "url": "https://www.ftc.gov/legal-library/browse/rules/mail-internet-or-telephone-order-merchandise-rule"
    }
  },
  {
    "slug": "returns-handoff-record",
    "title": "Design a Returns Handoff That Keeps Customer Context",
    "description": "A bounded return workflow from request and eligibility evidence through receipt, decision, and customer follow-up.",
    "category": "Customer care",
    "publishedAt": "2026-10-13",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-12/return-reason-evidence-capture.svg",
    "sections": [
      {
        "heading": "Split coordination from the decision",
        "paragraphs": [
          "A return contains several kinds of work: receiving the request, verifying the order, applying clear policy criteria, sending instructions, monitoring shipment, assessing receipt, and approving a financial outcome. Treating that sequence as one task hides where authority changes hands.",
          "Map each stage to an owner. A support assistant can maintain the record and coordinate approved steps. Policy exceptions, product-safety concerns, fraud judgments, condition disputes, and material refunds should move to designated owners."
        ]
      },
      {
        "heading": "Preserve the customer’s original reason",
        "paragraphs": [
          "Keep the customer’s wording and submitted evidence before assigning an internal reason code. A single return can contain fit, damage, expectation, delivery, and remorse signals. Replacing the narrative too early can distort both the individual case and later reporting.",
          "If a code is needed, store the versioned codebook, initial code, reviewer, and any adjudication. Missing evidence should remain missing rather than being classified into the nearest convenient category."
        ]
      },
      {
        "heading": "Make eligibility review mechanical where possible",
        "paragraphs": [
          "Turn unambiguous policy elements into a checklist: item identity, order date, request date, excluded category, condition evidence, and required authorization. A checklist supports consistency but does not grant discretion where the policy is unclear.",
          "Show the policy version used. If the published page and internal instructions conflict, pause the case and alert the policy owner instead of selecting the more convenient interpretation."
        ]
      },
      {
        "heading": "Connect receipt to the right case",
        "paragraphs": [
          "Use a return authorization or other stable case key across customer messages, carrier records, and warehouse receipt. Confirm item and quantity before preparing a refund or replacement packet. Do not infer receipt from a label scan alone.",
          "Record condition language from the responsible warehouse process without turning the assistant into a product-safety or valuation authority. Photographs and notes should stay attached to the case with controlled access."
        ]
      },
      {
        "heading": "Close both the operational and customer loop",
        "paragraphs": [
          "A case is not complete when the package arrives. The record should show the approved disposition, execution evidence, customer notification, and any inventory or accounting follow-up owned elsewhere.",
          "Review delayed receipts, policy exceptions, repeated reasons, and reopened conversations. These patterns can reveal weak instructions, unclear product pages, or ownership gaps, but they do not prove a cause without further investigation."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can an assistant determine return eligibility?",
        "a": "The assistant can apply clear written criteria. Ambiguity and discretionary exceptions need an accountable owner."
      },
      {
        "q": "Can a return close before the refund settles?",
        "a": "Operational stages can be marked separately, but customer-facing status must distinguish approval, initiation, settlement, and bank posting."
      },
      {
        "q": "What should be sampled for QA?",
        "a": "Include routine returns, exceptions, damaged-item reports, late requests, and cases that reopened after closure."
      }
    ],
    "internalService": "/services/returns-support",
    "internalSibling": "/blog/customer-support-escalation",
    "source": {
      "label": "FTC — Business Guidance Resources",
      "url": "https://www.ftc.gov/business-guidance/resources"
    }
  },
  {
    "slug": "marketplace-notice-handoff",
    "title": "Turn Marketplace Notices Into an Accountable Handoff",
    "description": "A practical way to preserve platform language, deadlines, evidence, and owner decisions without unsupported appeals.",
    "category": "Marketplace support",
    "publishedAt": "2026-10-13",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-12/marketplace-listing-suppression-handoff.svg",
    "sections": [
      {
        "heading": "Capture the notice before interpreting it",
        "paragraphs": [
          "Preserve the platform’s exact wording, case identifier, listing or account reference, received time, deadline, and visible attachments. A summary is useful later, but it should never replace the original record.",
          "Assign one accountable channel owner as soon as the notice enters the queue. Monitoring can be delegated; deciding what the platform means for pricing, claims, policy, legal exposure, or account standing cannot."
        ]
      },
      {
        "heading": "Separate record maintenance from formal response",
        "paragraphs": [
          "Assistants can gather approved catalog records, prior case history, screenshots with stable context, and the current state of affected listings. They can also maintain deadlines and draft from an approved template.",
          "A material appeal or admission should be reviewed and submitted by the role your organization authorizes. The packet must make unknowns visible and avoid predicting that a platform will accept the response."
        ]
      },
      {
        "heading": "Use a channel-specific checklist",
        "paragraphs": [
          "Common fields do not guarantee common meanings. Each marketplace can define identifiers, inventory states, response windows, and account-health consequences differently. Keep one control philosophy but separate channel instructions.",
          "Review account permissions along with the workflow. The monitoring role rarely needs payout, tax, user-administration, or unrestricted commercial settings."
        ]
      },
      {
        "heading": "Escalate the conditions that change risk",
        "paragraphs": [
          "Create an urgent path for account restrictions, imminent deadlines, safety or regulated-product issues, requests for sensitive information, payout changes, and notices that affect many listings or orders.",
          "Do not let repeated field edits substitute for diagnosis. If a suppression persists, preserve the notice and each attempted change so the owner can see what happened rather than beginning again."
        ]
      },
      {
        "heading": "Close with platform evidence",
        "paragraphs": [
          "Record submission or change evidence, the platform acknowledgment, current status, next check, and any customer or catalog follow-up. If the platform gives no final answer, leave the record open or explicitly unresolved.",
          "Review missed deadlines, duplicate cases, permission failures, and notices that reached the wrong owner. Improve the routing and evidence packet before increasing the role’s authority."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can an assistant submit an appeal?",
        "a": "Only if your written policy specifically authorizes it; material appeals should normally remain with channel, compliance, or legal owners."
      },
      {
        "q": "How should deadlines be tracked?",
        "a": "Use the platform time zone and preserve the original notice, received time, due time, and acknowledgment."
      },
      {
        "q": "What access is appropriate?",
        "a": "The minimum channel role needed for monitoring and assigned record maintenance, reviewed on a schedule."
      }
    ],
    "internalService": "/services/marketplace-support",
    "internalSibling": "/blog/product-listing-qa-checklist",
    "source": {
      "label": "FTC — Advertising and Marketing Basics",
      "url": "https://www.ftc.gov/business-guidance/advertising-marketing"
    }
  },
  {
    "slug": "customer-support-escalation",
    "title": "Write Customer Support Escalation Rules People Can Use",
    "description": "A practical escalation matrix for privacy, safety, policy, payment, and high-impact customer conversations.",
    "category": "Customer care",
    "publishedAt": "2026-10-13",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-12/customer-size-question-routing.svg",
    "sections": [
      {
        "heading": "Define the routine path first",
        "paragraphs": [
          "Escalation rules work only when the ordinary path is clear. Name the questions that can be answered from approved product, order, shipping, and return guidance, plus the identity checks required before account-specific information is disclosed.",
          "Give the assistant a current knowledge source and permission to say that a fact is not confirmed. A fast invented answer creates more work than a careful pause."
        ]
      },
      {
        "heading": "Create recognizable stop conditions",
        "paragraphs": [
          "Use concrete triggers: threats or safety concerns, legal claims, chargebacks, suspected fraud, sensitive-data requests, account identity uncertainty, large or repeated remedies, policy exceptions, and product claims not present in approved guidance.",
          "For each trigger, name the owner, urgency, evidence to preserve, message the assistant may send, and what must not be promised. Avoid a vague instruction to ‘ask a manager.’"
        ]
      },
      {
        "heading": "Keep the escalation brief concise",
        "paragraphs": [
          "The next owner needs the customer request, verified order context, timeline, actions already taken, relevant policy version, and the exact decision needed. They do not need a transcript pasted into an unapproved note.",
          "Link back to the controlled helpdesk record. Redact unnecessary personal details and never copy full payment information or credentials into an escalation packet."
        ]
      },
      {
        "heading": "Manage promises as operational work",
        "paragraphs": [
          "If the team promises an update, record the owner and due time. A conversation should not be marked resolved while a material decision or callback is still pending.",
          "When new evidence changes the expected outcome, update the customer in plain language. Distinguish what has been requested, approved, initiated, and completed."
        ]
      },
      {
        "heading": "Coach from patterns, not isolated tone preferences",
        "paragraphs": [
          "Sample accuracy, policy fit, verification, documentation, ownership, and customer clarity. Include reopened and transferred cases, because those often reveal knowledge and routing gaps that clean resolutions hide.",
          "Use recurring findings to update the smallest relevant source: a template, knowledge article, verification step, or escalation rule. Keep subjective style feedback separate from factual and control failures."
        ]
      }
    ],
    "faq": [
      {
        "q": "Should every complaint be escalated?",
        "a": "No. Escalate when a defined risk or decision boundary is reached; routine dissatisfaction can follow approved service guidance."
      },
      {
        "q": "What belongs in a quality rubric?",
        "a": "Accuracy, source use, identity verification, privacy, policy fit, documentation, ownership, tone, and promise completion."
      },
      {
        "q": "Can the assistant offer compensation?",
        "a": "Only within explicit written authority. Material or unusual remedies should go to the designated owner."
      }
    ],
    "internalService": "/services/customer-support",
    "internalSibling": "/blog/inventory-variance-packet",
    "source": {
      "label": "FTC — Privacy and Security Guidance",
      "url": "https://www.ftc.gov/business-guidance/privacy-security"
    }
  },
  {
    "slug": "inventory-variance-packet",
    "title": "Prepare an Inventory Variance Packet Without Forcing Agreement",
    "description": "How to compare timestamped records, keep uncertainty visible, and route adjustments to accountable inventory owners.",
    "category": "Inventory administration",
    "publishedAt": "2026-10-13",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-12/oversell-exception-reconciliation.svg",
    "sections": [
      {
        "heading": "Align the cutoff before comparing numbers",
        "paragraphs": [
          "Two correct reports can disagree when they describe different moments. Record each source’s generated time, time zone, location scope, and inventory-state definitions before calculating a variance.",
          "Keep available, reserved, in transit, returned, quarantined, and damaged units separate according to your business rules. A single on-hand column often hides the reason for a difference."
        ]
      },
      {
        "heading": "Preserve identifiers and transformations",
        "paragraphs": [
          "Retain the original SKU, location, bundle, and channel identifiers. If the assistant normalizes aliases for comparison, document the mapping and its approved owner.",
          "Do not silently collapse bundles into components or choose one system as correct without a stated governing rule. The packet should let the inventory owner see each source and the transformation applied."
        ]
      },
      {
        "heading": "Classify timing separately from unexplained variance",
        "paragraphs": [
          "Known feed delays, receiving windows, reservation timing, and approved adjustments can explain a difference without eliminating it. Mark those conditions with evidence and a next check.",
          "An unexplained variance needs recent movements, relevant counts, adjustment history, and the owner who can request a recount or approve a correction. It should not be balanced by changing the easiest system."
        ]
      },
      {
        "heading": "Require evidence for adjustments",
        "paragraphs": [
          "The adjustment packet should identify the SKU, location, prior state, proposed state, reason, source artifacts, requester, and approver. The person entering an approved change should not be treated as the person who made the financial or inventory decision.",
          "After entry, capture the destination event or updated record. Preserve rejected and reversed adjustments so later reviewers can reconstruct the sequence."
        ]
      },
      {
        "heading": "Review recurrence and physical evidence",
        "paragraphs": [
          "Group repeat variances by SKU, location, integration path, and inventory state. The pattern can direct investigation, but it does not by itself identify shrinkage, fraud, warehouse error, or accounting cause.",
          "Test a sample against warehouse-controlled or physical evidence rather than relying only on two feeds that may share the same upstream error. Report unresolved records in the denominator instead of hiding them."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can an assistant approve inventory adjustments?",
        "a": "Not by default. The assistant can prepare evidence and enter a specifically approved change when policy permits."
      },
      {
        "q": "Does reconciliation replace a physical count?",
        "a": "No. Administrative comparison supports visibility; physical truth remains with controlled warehouse and count procedures."
      },
      {
        "q": "What is the first field to record?",
        "a": "The report cutoff and source are essential; without them, the numbers may not be comparable."
      }
    ],
    "internalService": "/services/inventory-admin",
    "internalSibling": "/blog/order-exception-queue",
    "source": {
      "label": "US Census Bureau — Quarterly Retail E-Commerce Sales",
      "url": "https://www.census.gov/retail/ecommerce.html"
    }
  }
];

export const researchPosts: ResearchPost[] = [
  {
    "slug": "inventory-reservation-lag-study",
    "title": "Protocol: Inventory Reservation Lag Across Commerce Systems",
    "summary": "A reproducible protocol for measuring elapsed time between an accepted order and a visible inventory reservation without concealing missing events.",
    "cluster": "Inventory integrity",
    "publishedAt": "2026-10-13",
    "thumbnail": "/thumbnails/october-13/inventory-reservation-lag-study.svg",
    "finding": "This page defines a study protocol, not a completed study or performance claim. The unit is one accepted order line with traceable event evidence.",
    "sections": [
      {
        "heading": "Question and intended use",
        "paragraphs": [
          "Measure the elapsed time between an accepted order event and the first visible reservation event in selected systems. Use the result to locate evidence gaps and test a process change, not to decide customer remedies or claim that staffing caused an outcome.",
          "Declare the systems, locations, channels, and review window before inspecting values. Definitions of accepted and reserved must be stable enough that two reviewers can identify the same events."
        ]
      },
      {
        "heading": "Population and sampling",
        "paragraphs": [
          "Freeze the eligible order-line population and assign study keys. Record exclusions, inaccessible records, duplicates, cancellations, and replaced samples. Do not remove records simply because a reservation event is absent.",
          "Choose a sample that represents relevant channels and integration paths. If the study targets an incident window or one high-volume SKU, state that limitation instead of implying portfolio-wide coverage."
        ]
      },
      {
        "heading": "Data and event lineage",
        "paragraphs": [
          "Collect source event, event time, source time zone, ingestion time, reservation event, location, retry history, and evidence link. Preserve raw labels before normalization.",
          "Separate event time from observation time. Clock drift, batch ingestion, and platform-specific status definitions can create apparent lag that does not represent the same operational interval."
        ]
      },
      {
        "heading": "Analysis and review",
        "paragraphs": [
          "Predeclare the primary summary, such as median and tail lag among records with reconstructable lineage. Publish counts for eligible, analyzed, missing, conflicted, and unresolved records beside every rate.",
          "Use two reviewers on a blinded overlap sample. Report initial agreement, disagreement categories, adjudication, and codebook changes. A quality reviewer should be able to reopen evidence without private notes."
        ]
      },
      {
        "heading": "Privacy and limits",
        "paragraphs": [
          "Replace customer identifiers with study keys, restrict raw evidence, and collect only fields needed for the declared question. Set retention rules before extraction.",
          "This observational protocol can describe timing and evidence completeness. It cannot by itself establish why lag occurred or whether one person, vendor, or system caused the pattern."
        ]
      }
    ],
    "sources": [
      {
        "label": "US Census Bureau — Quarterly Retail E-Commerce Sales",
        "url": "https://www.census.gov/retail/ecommerce.html"
      },
      {
        "label": "FTC — Privacy and Security Guidance",
        "url": "https://www.ftc.gov/business-guidance/privacy-security"
      },
      {
        "label": "NIST — Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "refund-message-concordance",
    "title": "Protocol: Refund Event and Customer Message Concordance",
    "summary": "A source-led method for testing whether customer-facing refund status agrees with payment events and timing.",
    "cluster": "Customer evidence",
    "publishedAt": "2026-10-13",
    "thumbnail": "/thumbnails/october-13/refund-status-message-concordance.svg",
    "finding": "This is a proposed audit protocol. It reports no customer, processor, or staffing result.",
    "sections": [
      {
        "heading": "Define the states being compared",
        "paragraphs": [
          "Authorization, refund approval, processor initiation, settlement, and bank posting are different states. Define which payment event a customer message is expected to match at its send time.",
          "Preserve the exact message version and processor evidence. Do not score a later successful outcome as proof that an earlier message was accurate."
        ]
      },
      {
        "heading": "Select records before scoring",
        "paragraphs": [
          "Freeze the review window and eligible refund communications before reviewers see agreement results. Retain partial refunds, reversals, missing processor events, and corrected messages as declared categories.",
          "Use study keys and keep direct customer identifiers out of the analysis table. Restrict raw message and payment access to reviewers who need it."
        ]
      },
      {
        "heading": "Create a versioned codebook",
        "paragraphs": [
          "Define exact agreement for amount, currency, state, and event time. If a compatible-state mapping is useful, predeclare it as a sensitivity analysis rather than changing the primary rule after seeing results.",
          "List allowed missing, not applicable, conflicting, and unresolved values. Unknown evidence must not be converted into agreement."
        ]
      },
      {
        "heading": "Review independently",
        "paragraphs": [
          "Two reviewers should code an overlap sample without seeing each other’s decisions. Publish raw agreement, disputes, adjudication reasons, and codebook updates.",
          "Reconstruction matters as much as the final code. A reviewer should reach the source message and payment event from stable references rather than screenshots with unclear context."
        ]
      },
      {
        "heading": "Report with limits",
        "paragraphs": [
          "Show flow counts, source coverage, agreement counts, disagreement types, uncertainty, and counterexamples. Keep the original specification visible beside sensitivity results.",
          "The protocol can reveal message-event mismatch and evidence gaps. It does not determine legal rights, individual remedies, processor quality, or the cause of an observed discrepancy."
        ]
      }
    ],
    "sources": [
      {
        "label": "US Census Bureau — Quarterly Retail E-Commerce Sales",
        "url": "https://www.census.gov/retail/ecommerce.html"
      },
      {
        "label": "FTC — Privacy and Security Guidance",
        "url": "https://www.ftc.gov/business-guidance/privacy-security"
      },
      {
        "label": "NIST — Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "return-reason-reviewer-agreement",
    "title": "Protocol: Reviewer Agreement on Return Reasons",
    "summary": "A method for testing whether two reviewers apply a versioned return-reason codebook consistently while preserving customer language.",
    "cluster": "Returns measurement",
    "publishedAt": "2026-10-13",
    "thumbnail": "/thumbnails/october-12/return-reason-reviewer-agreement-study.svg",
    "finding": "The protocol measures coding consistency; it does not claim that one reason caused returns or that the code captures every customer concern.",
    "sections": [
      {
        "heading": "Preserve the original evidence",
        "paragraphs": [
          "Retain the customer’s wording and available item context before coding. One return can include fit, damage, expectation, delivery, and remorse signals; the study must state whether it permits one primary code or multiple labels.",
          "Remove unnecessary identifiers from the analysis copy. Give each record a study key linked to controlled source evidence."
        ]
      },
      {
        "heading": "Freeze a versioned codebook",
        "paragraphs": [
          "Define each code with inclusion, exclusion, and difficult examples. Record the codebook version used by each reviewer so changes are visible.",
          "Keep missing evidence, contradictory evidence, and no-applicable-code as valid outcomes. Forcing every record into a familiar category can inflate apparent consistency."
        ]
      },
      {
        "heading": "Sample before assignment",
        "paragraphs": [
          "Define the eligible population, window, exclusions, and sample selection before either reviewer assigns a code. Include ordinary and ambiguous records rather than selecting only well-documented returns.",
          "Preserve flow counts from eligible population through final analysis. Replacements and inaccessible records should be traceable."
        ]
      },
      {
        "heading": "Measure disagreement honestly",
        "paragraphs": [
          "Have reviewers work independently on an overlap sample. Report raw agreement, a suitable chance-adjusted measure when justified, disagreement pairs, and adjudicated outcomes.",
          "Use disagreements to clarify definitions, not to retroactively train the study sample until it agrees. Test revised rules on a fresh bounded sample."
        ]
      },
      {
        "heading": "State interpretive limits",
        "paragraphs": [
          "Agreement describes whether reviewers use the codebook consistently. It does not prove that the assigned reason is the only cause of a return or that changing one workflow will reduce returns.",
          "Report product mix, channel, evidence completeness, reviewer learning, and selection constraints so readers can judge whether the protocol transfers to another operation."
        ]
      }
    ],
    "sources": [
      {
        "label": "US Census Bureau — Quarterly Retail E-Commerce Sales",
        "url": "https://www.census.gov/retail/ecommerce.html"
      },
      {
        "label": "FTC — Privacy and Security Guidance",
        "url": "https://www.ftc.gov/business-guidance/privacy-security"
      },
      {
        "label": "NIST — Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "catalog-source-lineage-study",
    "title": "Protocol: Catalog Attribute Source Lineage",
    "summary": "A reproducible review of whether published product attributes can be traced to approved source records and transformations.",
    "cluster": "Catalog integrity",
    "publishedAt": "2026-10-13",
    "thumbnail": "/thumbnails/october-12/catalog-attribute-source-lineage-study.svg",
    "finding": "This protocol tests traceability and agreement. It does not certify the truth, legality, or commercial adequacy of a product claim.",
    "sections": [
      {
        "heading": "Choose attributes and channels",
        "paragraphs": [
          "Define the product set, attribute set, source systems, and published destinations. High-risk claims and regulated fields may require specialist review outside this operational protocol.",
          "Assign one observation to a product-attribute-channel combination at a fixed time. Keep retired and unavailable records visible in population counts."
        ]
      },
      {
        "heading": "Document allowable transformations",
        "paragraphs": [
          "A published label may differ from a source value because of formatting, units, channel taxonomy, or approved merchandising language. Record the transformation rule and owner instead of treating every difference as an error.",
          "Unsupported transformations and missing sources should remain exceptions. Do not infer evidence from a similar product or a previously published page."
        ]
      },
      {
        "heading": "Build reconstructable evidence",
        "paragraphs": [
          "For every observation, retain the source artifact, version, effective time, destination value, publication time where available, and reviewer outcome. Stable links are preferable to context-free screenshots.",
          "Separate source truth from system-of-record designation. The organization must name the governing source; the reviewer should not choose whichever system matches the destination."
        ]
      },
      {
        "heading": "Use independent checks",
        "paragraphs": [
          "Two reviewers should evaluate a blinded overlap sample using a versioned codebook. Report agreement, dispute categories, adjudication, and changes to rules.",
          "Reopen a quality sample from the study record alone. If evidence can be understood only through the first reviewer’s memory, lineage is incomplete."
        ]
      },
      {
        "heading": "Report scope and uncertainty",
        "paragraphs": [
          "Publish source coverage, matched, transformed, missing, conflicting, inaccessible, and unresolved counts. Show examples that challenge the dominant pattern.",
          "Traceability does not substantiate a claim or certify compliance. Product, legal, safety, and commercial owners remain responsible for source quality and approval."
        ]
      }
    ],
    "sources": [
      {
        "label": "US Census Bureau — Quarterly Retail E-Commerce Sales",
        "url": "https://www.census.gov/retail/ecommerce.html"
      },
      {
        "label": "FTC — Privacy and Security Guidance",
        "url": "https://www.ftc.gov/business-guidance/privacy-security"
      },
      {
        "label": "NIST — Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  }
];

export const nav = [{ href: '/services', label: 'Services' },{ href: '/about', label: 'About' },{ href: '/blog', label: 'Blog' },{ href: '/research', label: 'Research' },{ href: '/contact-us', label: 'Contact' }];
export function serviceBySlug(slug: string) { return undefined; }
export function blogBySlug(slug: string) { return blogPosts.find((post) => post.slug === slug); }
export function researchBySlug(slug: string) { return researchPosts.find((post) => post.slug === slug); }
