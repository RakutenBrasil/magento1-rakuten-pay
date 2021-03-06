<?php
/**
 ************************************************************************
 * Copyright [2018] [RakutenConnector]
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ************************************************************************
 */

namespace Rakuten\Connector\Resources\Builder;

use Rakuten\Connector\Resources\Builder;

/**
 * Class Notification
 * @package Rakuten\Connector\Resources\Builder
 */
class Notification extends Builder
{

    /**
     * @return string
     */
    public static function getTransactionRequestUrl()
    {
        return parent::getRequest(
            parent::getUrl(),
            'notification/transaction'
        );
    }

    /**
     * @return string
     */
    public static function getAuthorizationRequestUrl()
    {
        return parent::getRequest(
            parent::getUrl(),
            'notification/application'
        );
    }

    /**
     * @return string
     */
    public static function getPreApprovalRequestUrl()
    {
        return parent::getRequest(
            parent::getUrl(),
            'notification/preApproval'
        );
    }
}
